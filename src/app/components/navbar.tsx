"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname(); // Detecta la ruta actual

  const menuItems = [
    { name: "Productos", href: "/" },
    { name: "Soluciones", href: "/soluciones" },
    { name: "Comunidad", href: "/comunidad" },
    { name: "Recursos", href: "/recursos" },
    { name: "Precios", href: "/precios" },
    { name: "Contacto", href: "/contacto" },
    { name: "Enlace", href: "/enlace" },
  ];

  return (
    <nav className="w-full bg-black text-white px-6 py-3 flex items-center justify-between">
      {/* Logo */}
      <div className="text-xl font-bold cursor-pointer">Fifa 2026</div>

      {/* Menú */}
      <ul className="flex space-x-6 text-sm items-center justify-center flex-1">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <li
              key={item.name}
              className={`cursor-pointer px-3 py-1 rounded-full transition-colors ${
                isActive ? "bg-white text-black" : "hover:bg-gray-700 hover:text-white"
              }`}
            >
              <Link href={item.href}>{item.name}</Link>
            </li>
          );
        })}
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
