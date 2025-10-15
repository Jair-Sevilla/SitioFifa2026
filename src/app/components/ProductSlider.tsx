"use client";

import React, { useRef } from "react";

// --- INTERFACES ---
interface Product {
  src: string;
  price: string;
  amount: string;
}

interface ProductCardProps {
  product: Product;
}

// --- COMPONENTE PRODUCT CARD ---
const ProductCard: React.FC<ProductCardProps> = ({ product }) => (
  // 1. flex-none y w-64/w-full para que ocupe el espacio de una columna en el carrusel y no se rompa la fila.
  // 2. border-r para simular la línea divisoria vertical de la imagen de referencia.
  <div className="flex-none w-full sm:w-1/3 md:w-1/4 lg:w-1/5 min-w-[280px] border-r border-gray-200 bg-white">
    {/* Contenedor de la Imagen: Alto fijo y color de fondo opcional */}
    <div className="relative w-full aspect-[2/3] overflow-hidden flex items-center justify-center bg-gray-50/50">
      <img
        src={product.src}
        alt={product.price}
        // object-cover para que la imagen ocupe todo el espacio de forma limpia
        className="w-full h-full object-cover p-2"
      />
    </div>
    
    {/* Contenido de texto y precio - Sigue el estilo de fuente pequeño/precio negrita */}
    <div className="px-4 py-4 text-left border-t border-black bg-black text-white">
      <p className="text-sm font-light leading-tight">
        {product.price} - Unisex
      </p>
      <p className="mt-1 text-lg font-normal">{product.amount}</p>
    </div>
  </div>
);

// --- COMPONENTE SLIDER PRINCIPAL ---
const ProductSlider: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Datos del producto (duplicados para simular el desplazamiento)
  const products: Product[] = [
    { src: "/images/blanco.png", price: "2026 World Cup USA Mascot White T-Shirt", amount: "30,00 €" },
    { src: "/images/verde.png", price: "2026 World Cup Mexico Mascot White T-Shirt", amount: "30,00 €" },
    { src: "/images/azul.png", price: "2026 World Cup Canada Mascot White T-Shirt", amount: "30,00 €" },
    { src: "/images/amarillo.png", price: "2026 World Cup Blue Mascot White T-Shirt", amount: "30,00 €" },
    { src: "/images/blanco.png", price: "2026 World Cup Trophy T-Shirt", amount: "30,00 €" },
    { src: "/images/verde.png", price: "2026 World Cup Green Stripes T-Shirt", amount: "30,00 €" },
    { src: "/images/azul.png", price: "2026 World Cup Vintage Logo T-Shirt", amount: "30,00 €" },
    { src: "/images/amarillo.png", price: "2026 World Cup Yellow Mascot Tee", amount: "30,00 €" },
  ];
  
  // Tira de productos duplicada para el carrusel
  const sliderItems = [...products, ...products];

  // Función para desplazarse hacia adelante
  const handleNext = () => {
    if (scrollRef.current) {
      // Desplaza el 90% del ancho del contenedor para revelar el siguiente producto
      scrollRef.current.scrollBy({ left: scrollRef.current.clientWidth * 0.9, behavior: "smooth" });
    }
  };
  
  // Función para desplazarse hacia atrás (no visible en la imagen, pero útil)
  const handlePrev = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -scrollRef.current.clientWidth * 0.9, behavior: "smooth" });
    }
  };

  return (
    <div className="bg-white">
      
      {/* --- BARRA DE NAVEGACIÓN (TABS) --- */}
      <div className="flex bg-black text-white w-full overflow-x-auto whitespace-nowrap border-b border-white">
        {/* Estilo para la pestaña activa: fondo blanco, texto negro */}
        <button className="p-3 px-6 text-sm font-bold bg-white text-black uppercase border-b-2 border-white -mb-[2px] transition-colors duration-200">
          CAMISETAS
        </button>
        {/* Estilo para pestañas inactivas: fondo y texto negro */}
        <button className="p-3 px-6 text-sm font-bold uppercase hover:bg-gray-900 transition-colors duration-200">
          SUDADERAS CON CAPUCHA
        </button>
        <button className="p-3 px-6 text-sm font-bold uppercase hover:bg-gray-900 transition-colors duration-200">
          GORRAS
        </button>
      </div>
      
      {/* Contenedor del Carrusel (Tira de Productos) */}
      <div className="relative overflow-hidden w-full">
        
        {/* Botón de FLECHA DERECHA (Similar a la imagen) */}
        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white h-full w-12 flex items-center justify-center text-black z-10 shadow-md border-l border-gray-200"
          aria-label="Siguiente producto"
        >
          {/* Símbolo de mayor que */}
          <span className="text-xl font-light">&gt;</span>
        </button>
        
        {/* Botón de FLECHA IZQUIERDA (Opcional, no está en la imagen, pero es buena práctica) */}
         <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white h-full w-12 flex items-center justify-center text-black z-10 shadow-md border-r border-gray-200 opacity-0"
          aria-label="Producto anterior"
        >
          {/* Símbolo de menor que */}
          <span className="text-xl font-light">&lt;</span>
        </button>

        {/* --- TIRA DESLIZABLE HORIZONTAL --- */}
        <div
          ref={scrollRef}
          // El 'flex' horizontal y 'overflow-x-scroll' son CLAVE para el carrusel
          className="flex overflow-x-scroll snap-x snap-mandatory scroll-smooth w-full"
        >
          {sliderItems.map((item, index) => (
            <ProductCard key={index} product={item} />
          ))}
        </div>
      </div>

      {/* --- SEGUNDA TIRA DESLIZABLE (DUPLICADO PARA DOS TIRAS) --- */}
      <div className="bg-black text-white p-4">
        <h2 className="text-2xl font-bold">También te podría gustar...</h2>
      </div>
      
      <div className="relative overflow-hidden w-full">
        <div
          className="flex overflow-x-scroll snap-x snap-mandatory scroll-smooth w-full"
        >
          {sliderItems.reverse().map((item, index) => (
            <ProductCard key={`bottom-${index}`} product={item} />
          ))}
        </div>
        {/* Botón de flecha para la segunda tira (opcional) */}
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white h-full w-12 flex items-center justify-center text-black z-10 shadow-md border-l border-gray-200"
          aria-label="Siguiente producto"
          onClick={() => { if (scrollRef.current) scrollRef.current.scrollBy({ left: scrollRef.current.clientWidth * 0.9, behavior: "smooth" }); }}
        >
          <span className="text-xl font-light">&gt;</span>
        </button>
      </div>

    </div>
  );
};

export default ProductSlider;