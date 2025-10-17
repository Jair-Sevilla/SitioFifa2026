"use client";

import React, { useState } from "react"; 
import Link from "next/link";
import { usePathname } from "next/navigation";

// Iconos para menu de celulares
const MenuIcon = (props: React.SVGProps<SVGSVGElement>) => (
  /* Dibuja un icono de tres lineas */
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    fill="none" 
    viewBox="0 0 24 24" 
    strokeWidth={1.5} 
    stroke="currentColor" 
    className="w-6 h-6"
    {...props}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </svg>
);

const CloseIcon = (props: React.SVGProps<SVGSVGElement>) => (
  /* Dibuja un icono de x*/
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    fill="none" 
    viewBox="0 0 24 24" 
    strokeWidth={1.5} 
    stroke="currentColor" 
    className="w-6 h-6"
    {...props}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false); 

  // Enlaces del navbar
  const menuItems = [
    { name: "Inicio", href: "/inicio" },
    { name: "Productos", href: "/" },
    { name: "Soluciones", href: "/soluciones" },
    { name: "Comunidad", href: "/comunidad" },
    { name: "Recursos", href: "/recursos" },
    { name: "Precios", href: "/precios" },
    { name: "Contacto", href: "/contacto" },
  ];

  return (
    <nav className="w-full bg-black text-white px-4 md:px-6 py-4 shadow-xl sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Botón FIFA 2026 */}
        <Link
          href="/"
          className="px-4 py-2 bg-white text-black font-bold rounded-lg shadow hover:bg-gray-100 transition whitespace-nowrap text-sm"
        >
          FIFA 2026
        </Link>

        {/*Menú de Navegación */}
        <ul className="hidden md:flex space-x-4 lg:space-x-6 text-sm items-center justify-center flex-1 mx-4">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li
                key={item.name}
                className={`cursor-pointer px-3 py-1 rounded-full transition-colors whitespace-nowrap ${
                  isActive
                    ? "bg-white text-black font-semibold"
                    : "hover:bg-gray-700 hover:text-white"
                }`}
              >
                <Link href={item.href}>{item.name}</Link>
              </li>
            );
          })}
        </ul>

        {/* Lado Derecho: Botones*/}
        <div className="hidden md:flex space-x-3 items-center whitespace-nowrap">
          <Link
            href="/iniciar"
            className="px-4 py-1 rounded bg-gray-800 hover:bg-gray-700 font-medium transition text-sm"
          >
            Iniciar
          </Link>
          <Link
            href="/registro"
            className="px-4 py-1 rounded bg-white text-black hover:bg-gray-100 font-medium transition text-sm"
          >
            Registrar
          </Link>
        </div>

        {/* Boton para desplegar en navbar */}
        <button 
          className="md:hidden text-white p-2 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>
     {/* md: define el tamaño apartir de donde hace el cambio, md=768 px esto segun tailwind//////////////////////////////////////////////////////////////////////////////// */}
      {/* Menu desplegable en celulares */}
      <div 
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        } bg-black w-full`}
      >
        <div className="flex flex-col space-y-2 py-4">
          
          {/* navbar en celular */}
          {menuItems.map((item) => (
            <Link 
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)} // Cierra el menú al hacer clic
              className={`block px-4 py-3 rounded-lg text-lg font-medium transition-colors ${
                pathname === item.href 
                  ? "bg-gray-700 text-white" 
                  : "text-gray-300 hover:bg-gray-800 hover:text-white"
              }`}
            >
              {item.name}
            </Link>
          ))}
          
          <div className="h-px bg-gray-700 my-2"></div> {/* Separador */}

          {/* Botones */}
          <Link
            href="/iniciar"
            onClick={() => setIsOpen(false)}
            className="block text-center px-4 py-2 rounded bg-gray-800 hover:bg-gray-700 font-medium transition text-lg mt-2"
          >
            Iniciar
          </Link>
          <Link
            href="/registro"
            onClick={() => setIsOpen(false)}
            className="block text-center px-4 py-2 rounded bg-white text-black hover:bg-gray-100 font-medium transition text-lg"
          >
            Registrar
          </Link>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;