import React, { useEffect, useState } from 'react'
import GlobalAPI from '../Services/GlobalAPI'
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

const Slider = () => {
    const [moiveList , setMovieList] = useState([]);
    useEffect(()=>{
        getTrendingMovies();
    },[])
    const getTrendingMovies=()=>{
        GlobalAPI.getTrendingVedios.then(resp=>{
           // console.log('Response Data:',resp.data.results);
            setMovieList(resp.data.results)
        })
    }
  return (
    <div>
        < BsChevronCompactLeft className='text-white text-[30px] 
        absolute mx-8 mt-[150px] cursor-pointer'/>
        <BsChevronCompactRight className='text-white text-[30px] 
        absolute mx-8 mt-[150px] cursor-pointer right-0' />

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
</div>
  )
}

export default Slider
