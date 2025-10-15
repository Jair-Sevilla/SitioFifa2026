"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname(); // Detecta la ruta actual

  // Menú original
  const menuItems = [
    { name: "Productos", href: "/" },
    { name: "Soluciones", href: "/soluciones" },
    { name: "Comunidad", href: "/comunidad" },
    { name: "Recursos", href: "/recursos" },
    { name: "Precios", href: "/precios" },
    { name: "Contacto", href: "/contacto" },
    { name: "Enlace", href: "/enlace" },
  ];


  const fifaLogoUrl = "https://imgs.search.brave.com/M3MZ-5BzHaytXXDnv6xohbSb3b6eada_S1sdTfL73hQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ibG5r/Lm14L3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIzLzA1L2xvZ28t/bXVuZGlhbC0yMDI2/LWxvZ290aXBvLXBh/cmEtbXVuZGlhbC1i/cmFuZGluZy0wMi5w/bmc";


  return (
    <nav className="w-full bg-black text-white px-6 py-4 flex items-center justify-between shadow-xl">
      
      {/* Logo (Botón de Inicio) con URL webp */}
      <Link href="/" className="flex items-center space-x-2 cursor-pointer transition-opacity hover:opacity-80">
        <img
          src={fifaLogoUrl} 
          alt="FIFA Logo - Inicio"
          className="h-10 w-auto" // Tamaño del logo
        />
      </Link>

      {/* Menú (Estructura Original) */}
      <ul className="flex space-x-6 text-sm items-center justify-center flex-1">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <li
              key={item.name}
              className={`cursor-pointer px-3 py-1 rounded-full transition-colors ${
                isActive ? "bg-white text-black font-semibold" : "hover:bg-gray-700 hover:text-white"
              }`}
            >
              <Link href={item.href}>{item.name}</Link>
            </li>
          );
        })}
      </ul>

      {/* Botones (Estructura Original) */}
      <div className="flex space-x-3">
        <button className="px-4 py-1 rounded bg-gray-800 hover:bg-gray-700 font-medium">
          Iniciar
        </button>
        <button className="px-4 py-1 rounded bg-white text-black hover:bg-gray-100 font-medium">
          Registrar
        </button>
      </div>
    </nav>
  );
};

export default Navbar;