import React, { useEffect, useState } from 'react'
import GlobalAPI from '../Services/GlobalAPI'

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

const Slider = () => {
    const [moiveList , setMovieList] = useState([]);
    useEffect(()=>{
        getTrendingMovies();
    },[])
    const getTrendingMovies=()=>{
        GlobalAPI.getTrendingVedios.then(resp=>{
            console.log('Response Data:',resp.data.results);
            setMovieList(resp.data.results)
        })
    }
  return (
    <div className='flex overflow-x-auto w-full px-16 py-4 scrollbar-hide'>
  {moiveList.map((item) => (
    <img
      key={item.id}  
      src={IMAGE_BASE_URL + item.backdrop_path} 
      className='min-w-full h-[310px] object-cover object-left-top mr-5 rounded-md'
      alt={item.title || 'Movie'}  
    />
  ))}
</div>
  )
}

export default Slider
