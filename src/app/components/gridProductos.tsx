"use client";

import React from "react";

// --- INTERFACES ---
interface Product {
  src: string;
  name: string; // Nombre largo para el título
  priceMXN: number; // Precio en MXN (número para cálculos)
  discount: number; // Porcentaje de descuento (ej. 0.20 para 20%)
  rating: number; // Calificación de 0 a 5
  reviews: number; // Número de opiniones
}

interface ProductCardProps {
  product: Product;
}

// --- UTILIDAD: Estrella de Calificación ---
const RatingStars: React.FC<{ rating: number }> = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const stars = [];
  
  for (let i = 0; i < 5; i++) {
    if (i < fullStars) {
      // Estrella completa (amarilla)
      stars.push(<span key={i} className="text-yellow-500">★</span>);
    } else {
      // Estrella vacía (gris)
      stars.push(<span key={i} className="text-gray-300">★</span>);
    }
  }
  return <div className="inline-block text-sm leading-none">{stars}</div>;
};

// --- COMPONENTE PRODUCT CARD ---
const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const finalPrice = product.priceMXN * (1 - product.discount);
  const originalPriceText = new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(product.priceMXN);
  const finalPriceText = new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(finalPrice);

  return (
    <div className="bg-white border border-gray-100 hover:shadow-lg transition-shadow duration-300 rounded-lg overflow-hidden">
      
      {/* Contenedor de la Imagen */}
      <div className="relative w-full aspect-[4/5] flex items-center justify-center p-2">
        <img
          src={product.src}
          alt={product.name}
          className="w-full h-full object-contain"
        />
        {/* Etiqueta de descuento/promoción (como en Amazon/ML) */}
        {product.discount > 0 && (
            <span className="absolute top-2 left-2 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-sm">
                -{Math.round(product.discount * 100)}%
            </span>
        )}
      </div>
      
      {/* Contenido de texto y precio */}
      <div className="p-4 text-left">
        {/* Calificación y Opiniones */}
        <div className="flex items-center mb-1">
          <RatingStars rating={product.rating} />
          <span className="text-xs text-gray-500 ml-2">({product.reviews})</span>
        </div>

        {/* Nombre del Producto */}
        <p className="text-sm font-normal text-gray-800 h-10 overflow-hidden mb-2 leading-tight">
          {product.name}
        </p>
        
        {/* Precios */}
        <div className="mt-2">
            {/* Precio Original Tachado */}
            {product.discount > 0 && (
                <p className="text-xs text-gray-500 line-through">
                    {originalPriceText}
                </p>
            )}
            
            {/* Precio Final Destacado */}
            <p className="text-xl font-bold text-black">
                {finalPriceText}
            </p>
            
            {/* Mensaje de promoción o meses sin intereses (tipo Mercado Libre) */}
            <p className="text-green-600 text-xs font-medium mt-1">
                Envío GRATIS
            </p>
        </div>
      </div>
    </div>
  );
};

// --- COMPONENTE GRID PRINCIPAL ---
const EcommerceProductGrid: React.FC = () => {
  
  const products: Product[] = [
    { src: "/images/blanco.png", name: "Camiseta Oficial 2026 Atlanta - Edición Limitada", priceMXN: 899.00, discount: 0.20, rating: 4.5, reviews: 1250 },
    { src: "/images/verde.png", name: "Camiseta Oficial 2026 Verde Atlanta - Edición limitida", priceMXN: 1250.00, discount: 0.10, rating: 4.8, reviews: 320 },
    { src: "/images/azul.png", name: "Camiseta Guadalajara Mundial FIFA 2026 Clásico Algodón", priceMXN: 749.50, discount: 0, rating: 4.2, reviews: 890 },
    { src: "/images/amarillo.png", name: "Camiseta Boston FIFA 2026 ", priceMXN: 1499.00, discount: 0.30, rating: 4.7, reviews: 4500 },
    { src: "/images/blanco.png", name: "Camiseta Blanca We Are Atlanta 2026", priceMXN: 950.00, discount: 0, rating: 4.0, reviews: 670 },
    { src: "/images/verde.png", name: "Camiseta Verde We Are Atlanta Mundial 2026", priceMXN: 2100.00, discount: 0.25, rating: 4.9, reviews: 120 },
    { src: "/images/azul.png", name: "Camiseta Verde Aqua We Are Guadalajara 2026", priceMXN: 550.00, discount: 0, rating: 4.3, reviews: 980 },
    { src: "/images/amarillo.png", name: "Camiseta Amarilla We Are Boston 2026 ", priceMXN: 850.00, discount: 0.15, rating: 4.6, reviews: 1500 },
    { src: "/images/blanco.png", name: "Camiseta Blanca We Are Atlanta 2026", priceMXN: 950.00, discount: 0, rating: 4.0, reviews: 670 },
    { src: "/images/verde.png", name: "Camiseta Verde We Are Atlanta Mundial 2026", priceMXN: 2100.00, discount: 0.25, rating: 4.9, reviews: 120 },
    
  ];
  
  // *** CAMBIO CLAVE 1: Limitamos a 10 productos (5 columnas x 2 filas) ***
  const displayProducts = products.slice(0, 10);

  return (
    <div className="bg-gray-100 min-h-screen">
      
      
      {/* --- CONTENEDOR DE LA REJILLA (GRID) --- */}
      <div className="p-4 sm:p-6 md:p-8">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">Resultados Destacados (10 Productos)</h2>
        
        {/* *** CAMBIO CLAVE 2: Definimos las 5 columnas *** */}
        {/* En móvil (sm) se ven 2, en tablet (md) 3, en escritorio (lg y xl) se fuerzan 5 */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-4 md:gap-6">
          {displayProducts.map((item, index) => (
            <ProductCard key={index} product={item} />
          ))}
        </div>
      </div>

    </div>
  );
};

export default EcommerceProductGrid;