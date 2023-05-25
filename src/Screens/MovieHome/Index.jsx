import { FaeturedStyle, Section } from './style/Index'

export default function featuredMovie({ item }) {
console.log(item.genres)
let firstDate = new Date(item.first_air_date);
 
let Genres = []
item.genres.map((item, index) => {
  Genres.push(`${item.name} `)

  })
  return (

    <FaeturedStyle>
      <Section style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})` }}>
        <div>
          <div>
            <section>
            <h2 className='featured-name'>{item.original_name}</h2>
            <h3 className='featured-points'>{item.vote_average} pontos</h3>
            <h3 className='featured-years'>{firstDate.getFullYear()}</h3>
            <h3 className='featured-seassons'>{item.number_of_seasons !== 1 ? `${item.number_of_seasons}º Temporadas` : `${item.number_of_seasons}º Temporada`  }</h3>
            </section>
            <section className='featured-overview-buttons'>
            <h3 className='featured-description'>{item.overview}</h3> 
              <a className='featured-button-watch' href={item.id}>Assistir</a>
              <a className='featured-button-List' href=''>+ Minha lista</a>
            <h3 className='featured-Generes' >Genero: {Genres.join(', ')}</h3>
            </section>
          </div>
        </div>
      </Section>
    </FaeturedStyle>
  )
}