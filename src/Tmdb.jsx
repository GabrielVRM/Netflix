const API_KEY = '9487ed268a89f3a4c0d3fb2e751685eb'
const API_BASE = `https://api.themoviedb.org/3`


//  > Originais da Netflix
//  > Recomendados (trending)
//  > Em Alta (top-rider)
//  > Ação
//  > Comedia
//  > terror 
//  > Romance
//  > Documnetarios

const basicFetch = async (endpoint) => {
    const req = await fetch (`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;
 } 

 const language ='language=pt-BR'

 export async function getMovieInfo (movieId, type){
    let info = {};
    if (movieId) {
        switch (type) {
            case 'movie':
                info = await basicFetch(`/movie/${movieId}?${language}&api_key=${API_KEY}`)      
                break;
                case 'tv':
                    info = await basicFetch(`/tv/${movieId}?${language}&api_key=${API_KEY}`)
                break;
            default:
                break;
        }
    }
    return info;
    } 
export default async function getHomeList () {
    
    return [
        {
            slug: 'originals',
            title: 'originais da Netflix',
            items: await basicFetch(`/discover/tv?with_network=213&${language}&api_key=${API_KEY}`)
        },
        {
            slug: 'trending',
            title: 'Recomendados para Você',
            items: await basicFetch(`/trending/all/week?&${language}&api_key=${API_KEY}`)
        },
        {
            slug: 'toprated',
            title: 'Em Alta',
            items: await basicFetch(`/movie/top_rated?&${language}&api_key=${API_KEY}`)
        },
        {
            slug: 'action',
            title: 'Ação',
            items: await basicFetch(`/discover/movie?with_genres=28&${language}&api_key=${API_KEY}`)
        },   {
            slug: 'comedy',
            title: 'Comedia',
            items: await basicFetch(`/discover/movie?with_genres=35&${language}&api_key=${API_KEY}`)
        },   {
            slug: 'horror',
            title: 'Terror',
            items: await basicFetch(`/discover/movie?with_genres=27&${language}&api_key=${API_KEY}`)
        },   {
            slug: 'romance',
            title: 'Romance',
            items: await basicFetch(`/discover/movie?with_genres=10749&${language}&api_key=${API_KEY}`)
        },   {
            slug: 'documentary',
            title: 'Documentarios',
            items: await basicFetch(`/discover/movie?with_genres=99&${language}&api_key=${API_KEY}`)
        },
    ]
   
}
