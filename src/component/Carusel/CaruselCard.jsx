import axios from "axios";
import React, { useEffect, useState } from "react";

function CaruselCard() {
  const [Card, setCard] = useState();
  const [soat, setSoat] = useState(15);
  const [minut, setMinut] = useState(25);
  const [sekund, setSekund] = useState(29);

  useEffect(() => {
    const timer = setInterval(() => {
      setSekund((prevSekund) => {
        if (prevSekund > 0) {
          return prevSekund - 1;
        } else {
          setMinut((prevMinut) => {
            if (prevMinut > 0) {
              return prevMinut - 1;
            } else {
              setSoat((prevSoat) => {
                if (prevSoat > 0) {
                  setMinut(59);
                  return prevSoat - 1;
                }
                return 0;
              });
              return 59;
            }
          });
          return 59;
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    axios
      .get("https://mobile.olcha.uz/api/v2/product-of-the-day")
      .then((res) => {
        console.log(res.data.data.products);
        setCard(res.data.data.products[0]);
      });
  }, []);

  if (!Card) {
    return (
      <div className="m-auto flex justify-end items-center absolute top-10 bottom-0 left-0 right-32">
        <div className="w-16 h-16 border-4  border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }
  return (
    <div className="p-2">
      <div>
        <div className="flex  justify-between p-3">
          <div>
            <h1 className="text-xl font-semibold">Kun mahsuloti</h1>
          </div>
          <div>
            <h1 className="  text-xl  ">
              <button className="border rounded px-1 opacity-80">
                {soat.toString().padStart(2, "0")}
              </button>{" "}
              :
              <button className="border rounded px-1 opacity-80 ml-1">
                {minut.toString().padStart(2, "0")}{" "}
              </button>{" "}
              :
              <button className="border rounded px-1 opacity-80 ml-1">
                {sekund.toString().padStart(2, "0")}
              </button>
            </h1>
          </div>
        </div>

        <img
          src={Card?.main_image || "main_image"}
          alt="Product"
          className="w-44 m-auto  "
        />
        <p className=" text-[18px]">{Card?.name_oz || "name"}</p>
        <p className=" font-bold text-xl pt-4 w-60 ">
          {Card?.total_price || "total_price"} so'm
        </p>
        <p className="bg-yellow-300 p-2 mt-8 font-semibold rounded-xl px-8 w-52">
          {Card.monthly_repayment} so'm x 12 oy
        </p>
      </div>
    </div>
  );
}

export default CaruselCard;
