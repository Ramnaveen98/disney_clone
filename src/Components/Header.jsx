import React, { useState } from 'react';
import { HiHome, HiStar, HiSearch, HiPlus, HiDotsVertical } from "react-icons/hi";
import { FaPlayCircle, FaTv } from "react-icons/fa";
import Headeritem from './Headeritem';


function Header() {
  const [toggle,setToggle] = useState(false);

  const menu = [
    { name: 'HOME', icon: HiHome },
    { name: 'ORIGINALS', icon: HiStar },
    { name: 'WATCH LIST', icon: HiPlus },
    { name: 'MOVIES', icon: FaPlayCircle },
    { name: 'SERIES', icon: FaTv },
    { name: 'SEARCH', icon: HiSearch }
  ];

  return (
    <div className='flex items-center justify-between p-6'>
      <div className='flex gap-8 items-center'>
       
        <img src="/logo.png" className='w-[80px] md:w-[115px] object-cover' />
        
        <div className='hidden md:flex gap-8'>
          {menu.map((item) => (
            <Headeritem key={item.name} name={item.name} Icon={item.icon} />
          ))}
        </div>

        <div className='flex md:hidden gap-5'>
          {menu.map((item,index) => index<3&& (
            <Headeritem key={item.name} name={''} Icon={item.icon} />
          ))}
           <div className='md:hidden' onClick={()=>setToggle(!toggle)}>
            < Headeritem name={''} Icon={HiDotsVertical}/>
            {toggle? <div className='absolute mt-3 bg-[#121212] border-[1px] 
            border-gray-700 p-3 px-5 py-4'>
            {menu.map((item,index) => index>2&& (
            <Headeritem key={item.name} name={item.name} Icon={item.icon} />
          ))}
            </div> :null}
         
          </div>
        </div>
      </div>

      <img
        src="/UserImage.png"
        className="w-[40px] sm:w-[50px] md:w-[50px] lg:w-[50px] xl:w-[50px] rounded-full ml-4 lg:ml-[510px]" 
        alt="User Avatar"
      />
    </div>
  );
}

export default Header;
