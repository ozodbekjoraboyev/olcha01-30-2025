import React from 'react'
import Navbar_katalg from './Navbar_katalg'
import { Link } from 'react-router'

function Navbar_olcha() {
  return (
  <div className='flex justify-between items-center ml-4'>
    <div >
 <Link to={"/"}>
 <img  className='w-32' src="https://olcha.uz/_nuxt/plus.lRzD4Jf7.png" alt="" />
 </Link>
    
    </div>
    <Navbar_katalg />
  </div>
  )
}

export default Navbar_olcha
