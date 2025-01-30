import React, { useState } from "react";
import xbutton from "../../../assets/xbytton.svg";
import Bars from "../../ikonkalar/Bars";
import Madal from "./Madal";
function Navbar_katalg() {
  const [madal, setMadal] = useState(false);
  return (
    <div>
      <div className=" ml-10" >
        <button
          onClick={() => setMadal(!madal)}
          className="flex text-xl button items-center gap-3 cursor-pointer px-9 py-3 rounded-2xl border-2 hover:border-red-700 hover:text-red-700"
        >
          {madal ? <img width={20} src={xbutton} alt="" /> : <Bars />}
          Katolog
        </button>

        <Madal madal={madal} setMadal={setMadal} />
      </div>
    </div>
  );
}

export default Navbar_katalg;
