import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import yulduz from "../../assets/yulduz.svg";

function AdeniCard() {
  const { alias } = useParams();
  const [telefon, setTelefon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    axios
      .get(`https://mobile.olcha.uz/api/v2/products/view?alias=${alias}`)
      .then((res) => {
        setTelefon(res.data.data.product);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Xatolik:", error);
        setError("Ma'lumotni yuklashda xatolik yuz berdi.");
        setLoading(false);
      });
  }, [alias]);

  if (loading) {
    return <div className="text-center py-10 text-lg">Yuklanmoqda...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500 py-10">{error}</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col md:flex-row gap-10 bg-white shadow-lg p-6 rounded-lg">
        <div className="md:w-1/2 text-center">
          <img
            className="w-[300px] h-[350px] object-contain cursor-pointer mx-auto"
            src={selectedImage || telefon.main_image}
            alt={telefon.name}
            onClick={() => setSelectedImage(telefon.main_image)}
          />
          <div className="flex gap-2 mt-4 justify-center">
            {telefon.images?.slice(0, 4).map((img, index) => (
              <img
                key={index}
                className="w-[60px] h-[60px] border cursor-pointer rounded-lg"
                src={img}
                alt="Variant"
                onClick={() => setSelectedImage(img)}
              />
            ))}
          </div>
        </div>

        <div className="md:w-1/2 space-y-4">
          <h1 className="text-2xl font-bold">
            {telefon.name_oz || telefon.name_uz}
          </h1>
          <div className="flex items-center gap-1">
            <p className="text-gray-500">0 sharhlar</p>
          </div>

          <p className="text-2xl font-semibold text-green-600">
            {telefon.total_price} so'm
          </p>
          {telefon.discount_price > 0 && (
            <p className="text-red-500">
              Chegirma: {telefon.discount_price} so'm
            </p>
          )}

          <div className="space-y-2 text-gray-600">
            <p>
              <strong>O'lchami:</strong>____________________________
              162,16*74,92*8,24 mm
            </p>
            <p>
              <strong>Vazni:</strong>________________________________ 180 g
            </p>
            <p>
              <strong>Turi:</strong>__________________________________Smartfon{" "}
            </p>
            <p>
              <strong>rangi:</strong>_______________________________Ocean Blue
            </p>
            <p>
              <strong>Brend:</strong>______________________________{" "}
              {telefon.brand?.name || "Noma'lum"}
            </p>
          </div>

          <div className="flex gap-4 mt-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg">
              Sotib olish
            </button>
            <button className="border px-6 py-3 rounded-lg">
              Savatga qo‘shish
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdeniCard;
