import axios from "axios";
import React, { useEffect, useState } from "react";
import ShoppingCart02Icon from "../ikonkalar/Soping";
import sertsa1 from "../../assets/sertsa1.svg";
import sertsa2 from "../../assets/sertsa2.svg";
import { Link } from "react-router-dom";

function Cardlar() {
  const [cards, setCards] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    axios
      .get("https://mobile.olcha.uz/api/v2/products?category=10&has_discount")
      .then((res) => {
        const updatedCards = res.data.data.products
          .slice(0, 10)
          .map((card) => ({
            ...card,
            liked: false,
          }));
        setCards(updatedCards);
      });
  }, []);

  const toggleLike = (id) => {
    setCards((prevCards) =>
      prevCards.map((card) =>
        card.id === id ? { ...card, liked: !card.liked } : card
      )
    );
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };
console.log(cards);

  return (
    <div className="grid grid-cols-5 pt-5 container">
      {cards.map((item) => (
        <div key={item.id} className="p-4 relative">
          <img
            onClick={() => toggleLike(item.name)}
            className="w-7 cursor-pointer absolute ml-52 mt-5"
            src={item.liked ? sertsa2 : sertsa1}
            alt="Heart Icon"
          />
          <div className="absolute ml-52 mt-15">
          </div>
          <Link to={`/adenicard/${item.alias}`}>
            <div className="p-3 rounded-xl h-[400px]">
              <img
                className="w-64 h-60 cursor-pointer"
                src={item.main_image}
                alt=""
                onClick={() => handleImageClick(item.main_image)} // Bosilganda kattaroq rasmni ko'rsatish
              />
              <p className="text-xl text-black pt-2">
                {item.name.slice(0, 19)}
              </p>
              <div className="flex gap-3">
                <p className="font-bold text-black pt-7 text-xl">
                  {item.max_price} So'm
                </p>
                <p className="line-through opacity-65 pt-5">
                  {item.discount_value}
                </p>
              </div>
              <p className="bg-yellow-400 px-4 py-1 w-44 rounded-2xl mt-2">
                {item.discount_price} So'm 12 oy
              </p>
            </div>
          </Link>
          <div className="flex items-center gap-3 mt-7">
            <div className="border-2 border-black p-2 rounded-xl">
              <ShoppingCart02Icon />
            </div>
            <div>
              <p className="border-2 border-red-700 hover:bg-red-200 hover:text-black px-9 cursor-pointer text-red-700 rounded-xl py-2">
                Mudatli to'lov
              </p>
            </div>
          </div>
        </div>
      ))}

      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="relative bg-white p-5 rounded-lg">
            <img src={selectedImage} alt="Katta rasm" className="w-96 h-auto" />
            <button
              onClick={handleCloseModal}
              className="absolute top-0 right-0 text-white bg-red-500 p-2 rounded-full"
            >
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cardlar;
