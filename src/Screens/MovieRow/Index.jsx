import { MovieRowArea, MovieRowList, MovieRowStyle, Scroll } from './styles/Index'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useState } from 'react';

export default function MovieRow({ title, items }) {

    const [scrollX, setScrollX] = useState(-400)
    const handleLeftArrow = () => {
let x = scrollX + Math.round(window.innerWidth / 2)
if (x > 0 ) {
    x = 0;
}
setScrollX(x)

    }

    const handleRightArrow = () => {
        let x = scrollX - Math.round(window.innerWidth / 2)
        let listW = items.results.length * 150;
        if((window.innerWidth - listW) > x){
            x = (window.innerWidth - listW) -60;
        }
        setScrollX(x)

    }
    return (
        <>
            <MovieRowStyle className='movierowstyle'>
                <h2>
                    {title}
                </h2>
                    <Scroll>
                        <div className='arrow-left' onClick={handleLeftArrow} >
                        <ArrowBackIosIcon />
                        </div>
                  <div className='arrow-right' onClick={handleRightArrow}>
                        <ArrowForwardIosIcon />
                  </div>
                    </Scroll>
                <MovieRowArea>
                    <MovieRowList>
                        <div style={{marginLeft: scrollX}}>
                            {items.results.length > 0 && items.results.map((item, key) => (
                                <>

                                    <img key={key} src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} />
                                </>
                            ))}
                        </div>
                    </MovieRowList>
                </MovieRowArea>
            </MovieRowStyle>
        </>
    )
}