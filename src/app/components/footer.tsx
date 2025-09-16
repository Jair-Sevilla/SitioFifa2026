import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 px-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex flex-col space-y-4">
          <div className="text-2xl font-bold">Fifa 2026</div>
        </div>

        {/* Información */}
        <div>
          <h3 className="font-bold mb-3">Información</h3>
          <ul className="space-y-1 text-sm text-gray-300">
            <li>Accesibilidad</li>
            <li>Políticas de uso</li>
            <li>Políticas de Privacidad</li>
            <li>Términos y condiciones</li>
            <li>Uso de cookies</li>
          </ul>
        </div>

        {/* Explora */}
        <div>
          <h3 className="font-bold mb-3">Explora</h3>
          <ul className="space-y-1 text-sm text-gray-300">
            <li>Diseños</li>
            <li>Partidos</li>
            <li>Tienda</li>
            <li>Boletos</li>
            <li>Colaboraciones</li>
          </ul>
        </div>

        {/* Idioma */}
        <div>
          <h3 className="font-bold mb-3">Idioma</h3>
          <ul className="space-y-1 text-sm text-gray-300">
            <li>Inglés</li>
            <li>Español</li>
            <li>Francés</li>
            <li>Chino</li>
            <li>Italiano</li>
            <li>Portugués</li>
            <li>Alemán</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
