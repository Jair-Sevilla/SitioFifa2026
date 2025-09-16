import React from "react";


const Navbar = () => {
  return (
    <nav className="w-full bg-black text-white px-6 py-3 flex items-center justify-between">
      {/* Logo */}
      <div className="text-xl font-bold cursor-pointer">Fifa 2026</div>

      {/* Menú */}
      <ul className="flex space-x-6 text-sm">
        <li className="bg-gray-200 text-black rounded-full px-3 py-1 cursor-pointer">
          Productos
        </li>
        <li className="hover:text-gray-300 cursor-pointer">Soluciones</li>
        <li className="hover:text-gray-300 cursor-pointer">Comunidad</li>
        <li className="hover:text-gray-300 cursor-pointer">Recursos</li>
        <li className="hover:text-gray-300 cursor-pointer">Precios</li>
        <li className="hover:text-gray-300 cursor-pointer">
          <a href="/contacto">Contacto</a>
        </li>
        <li className="hover:text-gray-300 cursor-pointer">Enlace</li>
      </ul>

      {/* Botones */}
      <div className="flex space-x-3">
        <button className="px-4 py-1 rounded bg-gray-800 hover:bg-gray-700">
          Iniciar
        </button>
        <button className="px-4 py-1 rounded bg-white text-black hover:bg-gray-100">
          Registrar
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
