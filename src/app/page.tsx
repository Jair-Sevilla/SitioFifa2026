"use client";

import React, { useState } from "react";
import Navbar from "./components/navbar"; 
import Footer from "./components/footer";

// ---- Tipos de datos ----
interface Product {
  src: string;
  name: string;
  priceMXN: number;
  discount: number;
  rating: number;
  reviews: number;
  sede: string;
  color: string;
  envioGratis: boolean;
}

type Filtros = {
  sede: string[];
  color: string[];
  descuento: string[];
  estrellas: string[];
  envioGratis: string[];
};

// ---- Sidebar de filtros ----
const SidebarFiltros: React.FC<{
  filtros: Filtros;
  setFiltros: React.Dispatch<React.SetStateAction<Filtros>>;
  precio: number;
  setPrecio: React.Dispatch<React.SetStateAction<number>>;
  onClose?: () => void; 
}> = ({ filtros, setFiltros, precio, setPrecio, onClose }) => {
  const toggleFiltro = (categoria: keyof Filtros, valor: string) => {
    setFiltros((prev) => ({
      ...prev,
      [categoria]: prev[categoria].includes(valor)
        ? prev[categoria].filter((v) => v !== valor)
        : [...prev[categoria], valor],
    }));
  };

  const limpiarFiltros = () => {
    setPrecio(1000);
    setFiltros({ sede: [], color: [], descuento: [], estrellas: [], envioGratis: [] });
    if (onClose) onClose();
  };

  return (
    <aside className="p-4 border border-[#3AD29D] rounded-md bg-[#65FFD9] md:w-64 md:sticky md:top-4 w-full h-full">
      <div className="flex justify-between items-center mb-6 pb-2 border-b border-gray-400">
        <h3 className="text-xl font-bold text-gray-900">Filtros</h3>
        <div className="flex space-x-4">
          <button onClick={limpiarFiltros} className="text-sm text-black hover:text-gray-700 font-semibold transition-colors duration-200">Limpiar</button>
          {onClose && <button onClick={onClose} className="text-sm text-black hover:text-gray-700 font-bold transition-colors duration-200 md:hidden">Cerrar</button>}
        </div>
      </div>

      {/* Filtro por sede */}
      <div className="mb-6">
        <h3 className="font-bold mb-2 text-gray-700 uppercase text-xs tracking-wider">Sede</h3>
        <div className="space-y-2 text-sm">
          {["Atlanta", "Boston", "Guadalajara"].map((sede) => (
            <label key={sede} className="flex items-center space-x-2 cursor-pointer hover:text-gray-900">
              <input type="checkbox" checked={filtros.sede.includes(sede)} onChange={() => toggleFiltro("sede", sede)} className="accent-black rounded" />
              <span>{sede}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Filtro por color */}
      <div className="mb-6">
        <h3 className="font-bold mb-2 text-gray-700 uppercase text-xs tracking-wider">Color</h3>
        <div className="space-y-2 text-sm">
          {["Blanco", "Verde", "Amarillo"].map((color) => (
            <label key={color} className="flex items-center space-x-2 cursor-pointer hover:text-gray-900">
              <input type="checkbox" checked={filtros.color.includes(color)} onChange={() => toggleFiltro("color", color)} className="accent-black rounded" />
              <span>{color}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Filtro por precio */}
      <div className="mb-6">
        <h3 className="font-bold mb-2 text-gray-700 uppercase text-xs tracking-wider">Precio Máximo (MXN)</h3>
        <input type="range" min="100" max="2000" value={precio} onChange={(e) => setPrecio(Number(e.target.value))} className="w-full h-1 bg-gray-300 rounded-lg appearance-none cursor-pointer accent-black" />
        <div className="flex justify-between text-sm mt-2 text-gray-600 font-medium">
          <span>$100</span>
          <span className="font-bold">${precio}</span>
          <span>$2,000</span>
        </div>
      </div>

      {/* Filtro por descuento */}
      <div className="mb-6">
        <h3 className="font-bold mb-2 text-gray-700 uppercase text-xs tracking-wider">Descuento</h3>
        <div className="space-y-2 text-sm">
          {["Sí", "No"].map((opcion) => (
            <label key={opcion} className="flex items-center space-x-2 cursor-pointer hover:text-gray-900">
              <input type="checkbox" checked={filtros.descuento.includes(opcion)} onChange={() => toggleFiltro("descuento", opcion)} className="accent-black rounded" />
              <span>{opcion}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Filtro por estrellas */}
      <div className="mb-6">
        <h3 className="font-bold mb-2 text-gray-700 uppercase text-xs tracking-wider">Estrellas</h3>
        <div className="space-y-2 text-sm">
          {[1, 2, 3, 4, 5].map((n) => (
            <label key={n} className="flex items-center space-x-2 cursor-pointer hover:text-gray-900">
              <input type="checkbox" checked={filtros.estrellas.includes(n.toString())} onChange={() => toggleFiltro("estrellas", n.toString())} className="accent-black rounded" />
              <span>{"★".repeat(n)}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Filtro por envío gratis */}
      <div className="mb-6">
        <h3 className="font-bold mb-2 text-gray-700 uppercase text-xs tracking-wider">Envío Gratis</h3>
        <div className="space-y-2 text-sm">
          {["Sí", "No"].map((opcion) => (
            <label key={opcion} className="flex items-center space-x-2 cursor-pointer hover:text-gray-900">
              <input type="checkbox" checked={filtros.envioGratis.includes(opcion)} onChange={() => toggleFiltro("envioGratis", opcion)} className="accent-black rounded" />
              <span>{opcion}</span>
            </label>
          ))}
        </div>
      </div>
    </aside>
  );
};

// ---- Tarjeta de producto ----
const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const finalPrice = product.priceMXN * (1 - product.discount);
  const [saved, setSaved] = useState(false);
  const [inCart, setInCart] = useState(false);

  return (
    <div className="bg-white border border-gray-100 hover:shadow-lg transition-shadow duration-300 rounded-lg overflow-hidden flex flex-col">
      <div className="relative w-full aspect-[4/5] flex items-center justify-center p-2">
        <img src={product.src} alt={product.name} className="w-full h-full object-contain" /> 
        {product.discount > 0 && (
          <span className="absolute top-2 left-2 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-sm">
            -{Math.round(product.discount * 100)}%
          </span>
        )}
      </div>
      <div className="p-4 text-left flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center mb-1">
            <div>
              {Array.from({ length: 5 }, (_, i) => (
                <span key={i} className={i < Math.floor(product.rating) ? "text-yellow-500" : "text-gray-300"}>★</span>
              ))}
            </div>
            <span className="text-xs text-gray-500 ml-2">({product.reviews})</span>
          </div>
          <p className="text-sm font-normal text-gray-800 h-10 overflow-hidden mb-2 leading-tight">{product.name}</p>
          {product.discount > 0 && <p className="text-xs text-gray-500 line-through">${product.priceMXN}</p>}
          <p className="text-xl font-bold text-black">${finalPrice}</p>
          {product.envioGratis && <p className="text-green-600 text-xs font-medium mt-1">Envío GRATIS</p>}
        </div>
        {/* Botones Guardar y Carrito */}
        <div className="mt-3 flex gap-2">
          <button onClick={() => setSaved(!saved)} className={`flex-1 py-2 rounded-md font-semibold transition-colors ${saved ? "bg-yellow-400 text-black" : "bg-gray-200 text-gray-800 hover:bg-gray-300"}`}>
            {saved ? "Guardado" : "Guardar"}
          </button>
          <button onClick={() => setInCart(!inCart)} className={`flex-1 py-2 rounded-md font-semibold transition-colors ${inCart ? "bg-green-500 text-white" : "bg-gray-200 text-gray-800 hover:bg-gray-300"}`}>
            {inCart ? "En carrito" : "Añadir al carrito"}
          </button>
        </div>
      </div>
    </div>
  );
};

// ---- Grid de productos filtrados ----
const ProductGrid: React.FC<{ products: Product[]; filtros: Filtros; precio: number }> = ({ products, filtros, precio }) => {
  const filteredProducts = products.filter((p) => {
    const precioOk = p.priceMXN <= precio;
    const sedeOk = filtros.sede.length === 0 || filtros.sede.includes(p.sede);
    const colorOk = filtros.color.length === 0 || filtros.color.includes(p.color);
    const descuentoOk =
      filtros.descuento.length === 0 ||
      (filtros.descuento.includes("Sí") && p.discount > 0) ||
      (filtros.descuento.includes("No") && p.discount === 0);
    const estrellasOk =
      filtros.estrellas.length === 0 || filtros.estrellas.includes(Math.floor(p.rating).toString());
    const envioOk =
      filtros.envioGratis.length === 0 ||
      (filtros.envioGratis.includes("Sí") && p.envioGratis) ||
      (filtros.envioGratis.includes("No") && !p.envioGratis);

    return precioOk && sedeOk && colorOk && descuentoOk && estrellasOk && envioOk;
  });

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
      {filteredProducts.map((p, i) => (
        <ProductCard key={i} product={p} />
      ))}
    </div>
  );
};

// ---- Página principal ----
export default function Home() {
  const [precio, setPrecio] = useState(500);
  const [filtros, setFiltros] = useState<Filtros>({ sede: [], color: [], descuento: [], estrellas: [], envioGratis: [] });
  const [isFiltrosOpen, setIsFiltrosOpen] = useState(false); 

 const products: Product[] = [
    { src: "/images/blanco.png", name: "Camiseta Atlanta", priceMXN: 899, discount: 0.2, rating: 4.5, reviews: 1250, sede: "Atlanta", color: "Blanco", envioGratis: true },
    { src: "/images/verde.png", name: "Camiseta Verde Atlanta", priceMXN: 1250, discount: 0.1, rating: 4.8, reviews: 320, sede: "Atlanta", color: "Verde", envioGratis: false },
    { src: "/images/azul.png", name: "Camiseta Guadalajara", priceMXN: 749.5, discount: 0, rating: 4.2, reviews: 890, sede: "Guadalajara", color: "Azul", envioGratis: true },
    { src: "/images/amarillo.png", name: "Camiseta Boston", priceMXN: 1600, discount: 0.3, rating: 4.7, reviews: 4500, sede: "Boston", color: "Amarillo", envioGratis: true },
    { src: "/images/camisetaAzul.png", name: "Camiseta Azul marino BBVA", priceMXN: 800, discount: 0, rating: 4.2, reviews: 890, sede: "", color: "Azul", envioGratis: true },
    { src: "/images/camisetaVerde.png", name: "Camiseta Seleccion Mexicana", priceMXN: 500, discount: 0.3, rating: 4.7, reviews: 4500, sede: "", color: "Verde", envioGratis: true },
    { src: "/images/camisetaAmarilla.png", name: "Camiseta Amarilla America", priceMXN: 500, discount: 0.3, rating: 4.7, reviews: 4500, sede: "", color: "Amarillo", envioGratis: true },
    { src: "/images/blanco.png", name: "Camiseta Atlanta", priceMXN: 900, discount: 0.2, rating: 4.5, reviews: 1250, sede: "Atlanta", color: "Blanco", envioGratis: true },
    { src: "/images/verde.png", name: "Camiseta Verde Atlanta", priceMXN: 450, discount: 0.1, rating: 4.8, reviews: 320, sede: "Atlanta", color: "Verde", envioGratis: false },
    { src: "/images/azul.png", name: "Camiseta Guadalajara", priceMXN: 749.5, discount: 0, rating: 4.2, reviews: 890, sede: "Guadalajara", color: "Azul", envioGratis: true },
  ];

  return (
    <>
      <Navbar />
      <div className="md:hidden p-4">
        <button onClick={() => setIsFiltrosOpen(true)} className="w-full bg-[#3AD29D] text-gray-900 py-2 rounded-md font-bold shadow-md hover:bg-[#20b284] transition-colors">
          Filtrar Productos
        </button>
      </div>
      <main className="flex flex-1 p-4 md:p-6 gap-6">
        <div className="hidden md:block">
          <SidebarFiltros filtros={filtros} setFiltros={setFiltros} precio={precio} setPrecio={setPrecio} />
        </div>
        <div className="flex-1">
          <ProductGrid products={products} filtros={filtros} precio={precio} />
        </div>
      </main>
      {isFiltrosOpen && (
        <div className="fixed inset-0 z-50 bg-white/95 backdrop-blur-sm md:hidden overflow-y-auto">
          <div className="w-full h-full p-4">
            <SidebarFiltros filtros={filtros} setFiltros={setFiltros} precio={precio} setPrecio={setPrecio} onClose={() => setIsFiltrosOpen(false)} />
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}
