import React from "react";

const SidebarFiltros = () => {
  return (
    <aside className="w-64 bg-[#65FFD9] p-4 rounded-md">
      {/* Palabras clave */}
      <div className="mb-6">
        <h3 className="font-bold mb-2">Palabras clave</h3>
        <div className="flex flex-wrap gap-2">
          <span className="bg-gray-300 px-2 py-1 rounded-full text-sm cursor-pointer">
            Primavera ✕
          </span>
          <span className="bg-gray-300 px-2 py-1 rounded-full text-sm cursor-pointer">
            Moderno ✕
          </span>
        </div>
      </div>

      {/* Checkboxes */}
      <div className="mb-6">
        <div className="space-y-2">
          <label className="flex items-center space-x-2">
            <input type="checkbox" defaultChecked className="accent-black" />
            <span>Etiqueta Descripción</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="checkbox" defaultChecked className="accent-black" />
            <span>Etiqueta Descripción</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="checkbox" defaultChecked className="accent-black" />
            <span>Etiqueta Descripción</span>
          </label>
        </div>
      </div>

      {/* Precio */}
      <div className="mb-6">
        <h3 className="font-bold mb-2">Etiqueta</h3>
        <input
          type="range"
          min="0"
          max="500"
          className="w-full accent-black"
        />
        <p className="text-sm mt-1">$0 - $500</p>
      </div>

      {/* Color */}
      <div className="mb-6">
        <h3 className="font-bold mb-2">Color</h3>
        <div className="space-y-2">
          <label className="flex items-center space-x-2">
            <input type="checkbox" defaultChecked className="accent-black" />
            <span>Etiqueta</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="checkbox" defaultChecked className="accent-black" />
            <span>Etiqueta</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="checkbox" defaultChecked className="accent-black" />
            <span>Etiqueta</span>
          </label>
        </div>
      </div>

      {/* Tamaño */}
      <div>
        <h3 className="font-bold mb-2">Tamaño</h3>
        <div className="space-y-2">
          <label className="flex items-center space-x-2">
            <input type="checkbox" defaultChecked className="accent-black" />
            <span>Etiqueta</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="checkbox" defaultChecked className="accent-black" />
            <span>Etiqueta</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="checkbox" defaultChecked className="accent-black" />
            <span>Etiqueta</span>
          </label>
        </div>
      </div>
    </aside>
  );
};

export default SidebarFiltros;
