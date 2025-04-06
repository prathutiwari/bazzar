import React from "react";
import dosa from '../assets/images/card/dosa.jpg'
import roti from '../assets/images/card/roti.jpg'
import spices from '../assets/images/card/spices.jpg'

const products = [
  {
    title: "Fresh Idli & Dosa Batter",
    description:
      "Perfectly Fermented Batter for Fluffy Idlis and Crispy Dosas",
    imageUrl:dosa,
  },
  {
    title: "Ready to Eat Parathas and Rotis",
    description:
      "Convenient and Delicious Parathas and Rotis, Ready in Minutes",
    imageUrl: roti,
  },
  {
    title: "Premium Whole Spices",
    description:
      "Rich and Aromatic Whole Spices, Perfect for Authentic Indian Cooking.",
    imageUrl: spices,
  },
];

const CardContent = () => {
    return (
        <div className="container mt-10 mb-10">
            <h1 className='font-semibold text-[25px] md:text-[45px] mb-7 text-center text-black'>Everything You Want</h1>
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="rounded-2xl overflow-hidden shadow-md bg-green-50 flex flex-col"
              >
                <img
                  src={product.imageUrl}
                  alt={product.title}
                  className="h-64 w-full object-cover"
                />
                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 mb-2">
                      {product.title}
                    </h2>
                    <p className="text-gray-700 text-base">{product.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
}

export default CardContent;