import React from "react";
import Reklama from "./Reklama";

function Navbar_top() {
  return (
    <div >
      <div>
        <Reklama />
      </div>
      <div className="bg-red-600 ">
        <div className="flex justify-between container p-3">
          <div className="container flex items-center gap-5 ">
            <button className="bg-white button px-5 py-2 cursor-pointer text-red-700 font-semibold border-white rounded-2xl hover:bg-red-700 hover:text-white border-2 ">
              0% Mudatli to'lov
            </button>
            <button className=" px-5 py-2 button cursor-pointer font-semibold border-white text-white bg-red-700 rounded-2xl hover:bg-white hover:text-red-700 border-2 ">
              Chegirmalar
            </button>
            <button className="bg-white button px-5 text-red-700 py-2 cursor-pointer font-semibold border-white rounded-2xl hover:bg-red-700 hover:text-white border-2 ">
              Yutuqli o'yinlat
            </button>
            <h2 className="text-white cursor-pointer">Sayt xaritasi</h2>
          </div>
          <div className=" container">
            <div className="flex justify-end items-center gap-4">
              <h1 className="text-white font-bold text-xl ">
                +998 (71) 202 202 1
              </h1>
              <div>
                <button className="button px-5 py-2 cursor-pointer font-semibold border-white text-white bg-red-700 rounded-2xl hover:bg-white hover:text-red-700 border-2 ">
                  Chegirmalar
                </button>
              </div>
              <div>
                <div className=" border-l-1 text-white p-3 flex gap-3 ащте border-r-1 font-semibold">
                  <div className=" opacity-80 hover:opacity-100 cursor-pointer">
                    <h1>Узб</h1>
                  </div>
                  <div className=" opacity-100  hover:opacity-100 cursor-pointer">
                    <h1> O'ZB</h1>
                  </div>
                  <div className=" opacity-80 hover:opacity-100 cursor-pointer">
                    <h1> Руc</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar_top;
