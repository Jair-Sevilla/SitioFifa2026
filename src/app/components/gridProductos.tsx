import React from "react";

const ImageGrid = () => {
  const products = [
    { src: "/images/blanco.png", price: "Camiseta blanca $450" },
    { src: "/images/verde.png", price: "Camiseta verde $450" },
    { src: "/images/azul.png", price: "Camiseta azul $450" },
    { src: "/images/amarillo.png", price: "Camiseta amarilla $450" },
    { src: "/images/blanco.png", price: "Camiseta blanca $450" },
    { src: "/images/verde.png", price: "Camiseta verde $450" },
    { src: "/images/azul.png", price: "Camiseta azul $450" },
    { src: "/images/amarillo.png", price: "Camiseta amarilla $450" },
    { src: "/images/blanco.png", price: "Camiseta blanca $450" },
    { src: "/images/verde.png", price: "Camiseta verde $450" },
    { src: "/images/azul.png", price: "Camiseta azul $450" },
    { src: "/images/amarillo.png", price: "Camiseta amarilla $450" },
  ];

  return (
    <div className="flex-1 overflow-auto p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
        {products.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-6 rounded-2xl shadow-lg bg-white hover:scale-105 transition-transform duration-300 w-52"
          >
            <img
              src={item.src}
              alt={`Producto ${index + 1}`}
              className="w-40 h-40 object-contain"
            />
            <p className="mt-4 text-lg font-semibold text-gray-800 text-center">
              {item.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGrid;
