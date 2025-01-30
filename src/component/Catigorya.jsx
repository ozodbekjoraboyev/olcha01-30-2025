import React, { useEffect, useState } from "react";
import axios from "axios";
function Catigores() {
  const [catigors, setCotigores] = useState([]);
  useEffect(() => {
    axios.get("https://mobile.olcha.uz/api/v2/categories").then((res) => {
      console.log(res.data.data.categories.slice(0, 10));
      setCotigores(res.data.data.categories.slice(0, 10));
    });
  }, []);
  return (
    <div className=" grid grid-cols-10 container pt-5">
      {catigors.map((itme) => (
        <div
          key={itme.id}
          className="border  border-red-700 w-20 rounded-full border-b-7  border-l-3 border-r-3 "
        >
          <img className=" w-24  " src={itme.main_image} alt="" />
        </div>
      ))}
    </div>
  );
}

export default Catigores;
