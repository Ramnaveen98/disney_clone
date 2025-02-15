import React from 'react'
import logo from '/Users/ramnaveengupthakandikatla/disney_clone/src/assets/images1/logo.png'

const Header = () => {
  return (
    <div >
      <img src={logo} alt="Logo of Disney_clone" className='w-[80px] md:w-[115px] object-cover'/>
    </div>
  )
}

export default Header
