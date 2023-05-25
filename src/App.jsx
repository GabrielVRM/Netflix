import getHomeList from './Tmdb'
import { getMovieInfo } from './Tmdb';
import FeaturedMovie from './Screens/MovieHome/Index';
import loader from 'C:/Users/gabri/OneDrive/Área de Trabalho/Netflix/netflix/public/loader.gif'
import './App.css'
import { useEffect, useState } from 'react'
import MovieRow from './Screens/MovieRow/Index';
import HeaderComponets from './components/Header/Header';
import Footer from './components/Footer/Index';

export default function App() {

  const [movieList, setMovieList] = useState([])
  const [featuredData, setFeaturedData] = useState(null)
  const [backheader, setBackheader] = useState(false)

  useEffect(() => {
    const loadAll = async () =>{
      // pegando a lista total 
      let list = await getHomeList();
      setMovieList(list)


      //Pegando o filme em destaque (featured)
    
    let originals = list.filter(i=>i.slug === 'originals' );
    let randowChosen = Math.floor(Math.random() * (originals[0].items.results.length -1));
    let chosen = originals[0].items.results[randowChosen];
    let chosenInfo = await getMovieInfo(chosen.id, 'tv');

      setFeaturedData(chosenInfo)
    }
    loadAll();
  }, []);



  useEffect(()=> {

const scrollListerner = () => {
if(window.scrollY > 10){
  setBackheader(true)
}else {
  setBackheader(false)
}
}

window.addEventListener('scroll', scrollListerner);
return () => {
  window.removeEventListener('scroll', scrollListerner);
}

  }, [])
  return (
    <>
      <div className='page'>
        <HeaderComponets scroll={backheader}/>
        {featuredData && <FeaturedMovie item={featuredData} />}
                <section className='lists'>
          {movieList.map((item, key) => (
            <div>
              <MovieRow key={key} title={item.title} items={item.items} />
            </div>
          ))}
        </section>
        <Footer/>
        {movieList.length <= 0 &&
       <div className='div-loader'>
         <img className='loader' src={loader} />
         </div>
      }
      </div>
    </>
  )
}