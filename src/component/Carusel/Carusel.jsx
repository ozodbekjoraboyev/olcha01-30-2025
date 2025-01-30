import React, { useState, useEffect } from "react";

import axios from "axios";

import CaruselCard from "./CaruselCard";
import ArrowLeft04Icon from "../ikonkalar/Left";
import ArrowRight02Icon from "../ikonkalar/reght";

function Carusel() {
  const [imglar, setImglar] = useState([]);
  const [carusel, setCarusel] = useState(0);

  useEffect(() => {
    axios
      .get("https://mobile.olcha.uz/api/v2/extra/sliders")
      .then((res) => {
        const sliders = res.data.data.sliders.map((item) => item.image_oz);
        setImglar(sliders);
      })
      .catch((err) => console.error("Xatolik yuz berdi:", err));
  }, []);

  function next() {
    setCarusel((prev) => (prev + 1) % imglar.length);
  }

  function ext() {
    setCarusel((prev) => (prev - 1 + imglar.length) % imglar.length);
  }

  if (!imglar.length) {
    return (
      <div className="m-auto flex justify-center items-center absolute top-0 bottom-0 left-0 right-0">
        <div className="w-16 h-16 border-4 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="flex justify-between container ">
      <div className="m-auto container">
        <div className="relative flex items-center justify-start mt-5">
          <button
            onClick={ext}
            className="absolute cursor-pointer top-1/2 left-4 -translate-y-1/2 border border-blue-100 shadow-md rounded-full p-3 bg-white active:translate-x-1 transition"
          >
            <ArrowLeft04Icon />
          </button>

          <img
            className="w-[100%]  rounded-lg shadow-lg transition-transform duration-700"
            src={imglar[carusel]}
            alt="Carusel rasmi"
          />

          <button
            onClick={next}
            className="absolute cursor-pointer top-1/2 right-4 -translate-y-1/2 border border-blue-100 shadow-md rounded-full p-3 bg-white active:translate-x-1 transition"
          >
            <ArrowRight02Icon />
          </button>
        </div>

        <div className=" text-center container flex  pl-90 gap-2 absolute ">
          {imglar.map((item, index) => (
            <img
              key={index}
              className={`w-5 h-5 flex  rounded-full cursor-pointer border-2 transition-transform -mt-16 ${
                carusel === index
                  ? "border-blue-500 rounded-full scale-110"
                  : "border-gray-300 rounded-full hover:scale-105"
              }`}
              src={item}
              alt="Miniatura"
              onClick={() => setCarusel(index)}
            />
          ))}
        </div>
      </div>
      <div className="w-[400px] mt-5 ml-5 border-4 border-red-700 rounded-2xl">
        <CaruselCard />
      </div>
    </div>
  );
}

export default Carusel;
