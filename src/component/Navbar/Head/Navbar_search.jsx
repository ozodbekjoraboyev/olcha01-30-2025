import React from 'react'
import search from "../../../assets/search.svg";
import Navbar_katalog from './Navbar_olcha';
import Navbar_button from './Navbar_button';
function Navbar_search() {
  return (
    <div className=' container '>
       <div className="flex justify-between items-center mt-10 ">
        <Navbar_katalog />
      <div className="flex items-center border-2 px-2  rounded-xl w-[600px] py-2 justify-between">
        <input
          className=" outline-0"
          type="text"
          placeholder="Katolog bo'yicha qidirish"
        />
        <button className="bg-red-700 px-5 py-2 rounded-xl ">
          <img className=" " width={20} src={search} alt="" />
        </button>
      </div>
      <div>
    <Navbar_button />
      </div>
    </div>
    </div>
  )
}

export default Navbar_search
