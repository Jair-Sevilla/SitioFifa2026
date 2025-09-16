import React from "react";

const ImageGrid = () => {
  const products = [
    { src: "/images/blanco.png", price: "Camiseta blanca $450" },
    { src: "/images/verde.png", price: "Camiseta verde $450" },
    { src: "/images/azul.png", price: "Camiseta azul $450" },
    { src: "/images/amarillo.png", price: "Camiseta amarilla $450" },
    { src: "/images/blanco.png", price: "Camiseta blanca $450" }, 
    { src: "/images/verde.png", price: "Camiseta verde $450" },  
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 p-8 justify-items-end">
      {products.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-end p-6 rounded-2xl shadow-lg bg-white hover:scale-105 transition-transform duration-300 w-44"
        >
          <img
            src={item.src}
            alt={`Producto ${index + 1}`}
            className="w-32 h-32 object-contain"
          />
          <p className="mt-3 text-lg font-semibold text-gray-800">{item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
