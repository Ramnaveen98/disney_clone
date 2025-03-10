import React from 'react';

import disneyImage from '/images/disney.png';
import marvelImage from '/images/marvel.png';
import nationalImage from '/images/nationalG.png';
import pixarImage from '/images/pixar.png';
import starwarImage from '/images/starwar.png';
import disneyVedio from '/Vedios/disney.mp4';
import marvelVedio from '/Vedios/marvel.mp4';
import nationalgeographicVedio from '/Vedios/national-geographic.mp4';
import pixarVedio from '/Vedios/pixar.mp4';
import starwarsVedio from '/Vedios/star-wars.mp4';

const ProductionHouse = () => {
  const productionHouseList = [
    {
      id: 1,
      image: disneyImage,
      video: disneyVedio
    },
    {
      id: 2,
      image: marvelImage,
      video: marvelVedio
    },
    {
      id: 3,
      image: nationalImage,
      video: nationalgeographicVedio
    },
    {
      id: 4,
      image: pixarImage,
      video: pixarVedio
    },
    {
      id: 5,
      image: starwarImage,
      video: starwarsVedio
    }
  ];

  return (
    <div className='flex gap-5 p-2 px-5 md:px-16'>
      {productionHouseList.map((item) => (
        <div
          key={item.id}
          className='relative border-[2px] border-gray-600 rounded-lg'>
          <video
            src={item.video}
            autoPlay
            loop
            playsInline
            muted
            className='absolute top-0 rounded-md z-0 w-full h-full object-cover 
            opacity-0 transition-opacity duration-500 ease-in-out hover:opacity-100'
          />
          <img
            src={item.image}
            alt={`Image for ${item.id}`}
            className='w-full z-[1] transition-opacity duration-500 ease-in-out hover:opacity-50' />

          
          
        </div>
      ))}
    </div>
  );
};

export default ProductionHouse;
