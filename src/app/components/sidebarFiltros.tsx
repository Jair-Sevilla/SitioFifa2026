import React from "react";

const SidebarFiltros: React.FC = () => {
  return (
    // CAMBIO: Fondo con tu color, esquinas redondeadas, sin sombra para mantener el look más plano.
    <aside className="w-64 bg-[#65FFD9] p-4 rounded-md border border-[#3AD29D]">
      
      {/* Encabezado y Botón de Limpiar */}
      {/* El padding y el margen de la sección superior (mb-6) permanecen para mantener la estructura original */}
      <div className="flex justify-between items-center mb-6 pb-2 border-b border-gray-400">
        <h3 className="text-xl font-bold text-gray-900">Filtros</h3>
        <button className="text-sm text-black hover:text-gray-700 font-semibold transition-colors duration-200">
          Limpiar
        </button>
      </div>

      {/* ----------------- ETIQUETAS ACTIVAS / MATERIAL (Originalmente 'Palabras clave') ----------------- */}
      <div className="mb-6">
        <h3 className="font-bold mb-2 text-gray-700 uppercase text-xs tracking-wider">Etiquetas Aplicadas</h3>
        <div className="flex flex-wrap gap-2">
          {/* Etiquetas (Pills) con mejor contraste y tu estructura de espaciado */}
          <span className="bg-gray-700 text-white px-3 py-1 rounded-full text-xs font-medium cursor-pointer hover:bg-gray-900 transition-colors duration-200">
            Primavera ✕
          </span>
          <span className="bg-gray-700 text-white px-3 py-1 rounded-full text-xs font-medium cursor-pointer hover:bg-gray-900 transition-colors duration-200">
            Moderno ✕
          </span>
        </div>
      </div>

      {/* ----------------- CIUDAD / SEDE (Originalmente 'Checkboxes') ----------------- */}
      <div className="mb-6 pt-2 border-t border-gray-400">
        <h3 className="font-bold mb-2 text-gray-700 uppercase text-xs tracking-wider">Sede</h3>
        <div className="space-y-2 text-sm">
          <label className="flex items-center space-x-2 cursor-pointer hover:text-gray-900">
            <input type="checkbox" defaultChecked className="accent-black rounded" />
            <span>Atlanta</span>
          </label>
          <label className="flex items-center space-x-2 cursor-pointer hover:text-gray-900">
            <input type="checkbox" defaultChecked className="accent-black rounded" />
            <span>Boston</span>
          </label>
          <label className="flex items-center space-x-2 cursor-pointer hover:text-gray-900">
            <input type="checkbox" defaultChecked className="accent-black rounded" />
            <span>Guadalajara</span>
          </label>
        </div>
      </div>

      {/* ----------------- PRECIO (Slider) ----------------- */}
      <div className="mb-6 pt-2 border-t border-gray-400">
        <h3 className="font-bold mb-2 text-gray-700 uppercase text-xs tracking-wider">Precio Máximo (MXN)</h3>
        {/* Slider con rango de 100 a 2000 */}
        <input
          type="range"
          min="100" 
          max="2000"
          defaultValue="500" 
          className="w-full h-1 bg-gray-300 rounded-lg appearance-none cursor-pointer accent-black"
        />
        {/* Indicadores de precio más visibles */}
        <div className="flex justify-between text-sm mt-2 text-gray-600 font-medium">
            <span>$100</span>
            <span className="font-bold">$500</span>
            <span>$2,000</span>
        </div>
      </div>
      
      {/* ----------------- COLOR ----------------- */}
      <div className="mb-6 pt-2 border-t border-gray-400">
        <h3 className="font-bold mb-2 text-gray-700 uppercase text-xs tracking-wider">Color</h3>
        <div className="space-y-2 text-sm">
          <label className="flex items-center space-x-2 cursor-pointer hover:text-gray-900">
            <input type="checkbox" defaultChecked className="accent-black rounded" />
            <span>Blanco</span>
          </label>
          <label className="flex items-center space-x-2 cursor-pointer hover:text-gray-900">
            <input type="checkbox" defaultChecked className="accent-black rounded" />
            <span>Verde</span>
          </label>
          <label className="flex items-center space-x-2 cursor-pointer hover:text-gray-900">
            <input type="checkbox" defaultChecked className="accent-black rounded" />
            <span>Amarillo</span>
          </label>
        </div>
      </div>

      {/* ----------------- TAMAÑO (Talla) ----------------- */}
      {/* Última sección, usa pt-2 y border-t pero sin mb-6 para que se ajuste al fondo. */}
      <div className="pt-2 border-t border-gray-400"> 
        <h3 className="font-bold mb-2 text-gray-700 uppercase text-xs tracking-wider">Talla</h3>
        <div className="space-y-2 text-sm">
          <label className="flex items-center space-x-2 cursor-pointer hover:text-gray-900">
            <input type="checkbox" defaultChecked className="accent-black rounded" />
            <span>Chico</span>
          </label>
          <label className="flex items-center space-x-2 cursor-pointer hover:text-gray-900">
            <input type="checkbox" defaultChecked className="accent-black rounded" />
            <span>Mediano</span>
          </label>
          <label className="flex items-center space-x-2 cursor-pointer hover:text-gray-900">
            <input type="checkbox" defaultChecked className="accent-black rounded" />
            <span>Grande</span> 
          </label>
        </div>
      </div>
      
    </aside>
  );
};

export default SidebarFiltros;