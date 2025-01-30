import React from 'react'
import Navbar_katalg from './Navbar_katalg'

function Navbar_olcha() {
  return (
  <div className='flex justify-between items-center ml-4'>
    <div >
      <img className='w-32' src="https://olcha.uz/_nuxt/plus.lRzD4Jf7.png" alt="" />
    
    </div>
    <Navbar_katalg />
  </div>
  )
}

export default Navbar_olcha
