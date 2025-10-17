"use client"; // <- Muy importante para usar useState

import React, { useState } from 'react';
import Navbar from '../components/navbar'; 
import Footer from '../components/footer';

const RegistroPage = () => {

  // Imagen
  const registroImageUrl = "https://imgs.search.brave.com/ZV3N3hhHDocUCM39QyJaBrZkX0i89wx4Bz84gj-XfwI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/Zm9yYmVzLmNvbS5t/eC8yMDI0LzA0L2Nv/cGEtbXVuZGlhbC1m/dXRib2wtZmlmYS0u/d2VicA";

  // Estado para controlar el texto del botón
  const [buttonText, setButtonText] = useState('Crear cuenta');

  // Función al enviar el formulario
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 
    setButtonText('Completado'); // Cambia a completado cuando se da clic
  }

  return (
    <>
      <Navbar/>

      <div className="min-h-screen bg-[#EDE0FF] flex items-center justify-center py-16 px-6">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 w-full max-w-6xl">

          {/* Información lateral */}
          <div className="flex-1 w-full max-w-md md:max-w-none">
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#0B0B45] leading-tight mb-4">
              Regístrate para el Mundial FIFA 2026
            </h1>
            <p className="text-gray-600 mb-6">
              Crea tu cuenta para participar en sorteos, recibir noticias exclusivas y ser parte de la comunidad del Mundial 2026.
            </p>
            <img
              src={registroImageUrl}
              alt="Fanáticos celebrando en el Mundial"
              className="w-full h-auto object-cover rounded-xl shadow-2xl transition-transform duration-500 hover:scale-[1.02]"
            />
          </div>

          {/* Formulario */}
          <div className="flex-1 bg-gray-50 border border-gray-200 shadow-xl rounded-xl p-8 md:p-10 w-full max-w-lg">
            <h2 className="text-3xl font-extrabold text-[#0B0B45] mb-6 text-center">
              Registrate
            </h2>

            <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
              
              {/* Nombre */}
              <div>
                <label className="block text-gray-700 mb-1 font-semibold">Nombre completo</label>
                <input
                  type="text"
                  placeholder="Ej: Juan Sanchez"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0B0B45] transition-colors"
                  required
                />
              </div>

              {/* Correo */}
              <div>
                <label className="block text-gray-700 mb-1 font-semibold">Correo electrónico</label>
                <input
                  type="email"
                  placeholder="Ej: juanSanchez@email.com"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0B0B45] transition-colors"
                  required
                />
              </div>

              {/* País */}
              <div>
                <label className="block text-gray-700 mb-1 font-semibold">País</label>
                <input
                  type="text"
                  placeholder="Ej: México"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0B0B45] transition-colors"
                  required
                />
              </div>

              {/* Contraseña */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-gray-700 mb-1 font-semibold">Contraseña</label>
                  <input
                    type="password"
                    placeholder="********"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0B0B45] transition-colors"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-1 font-semibold">Confirmar contraseña</label>
                  <input
                    type="password"
                    placeholder="********"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0B0B45] transition-colors"
                    required
                  />
                </div>
              </div>

              {/* Botón */}
              <button
                type="submit"
                className="bg-[#0B0B45] text-white rounded-lg py-3 font-bold text-lg hover:bg-[#1A1A5F] transition-colors"
              >
                {buttonText}
              </button>

              {/* Texto final */}
              <p className="text-center text-gray-600 text-sm mt-2">
                Al registrarte aceptas nuestros <a href="#" className="text-[#0B0B45] font-semibold hover:underline">Términos y Condiciones</a>.
              </p>
            </form>
          </div>
        </div>
      </div>

      <Footer/>
    </>
  );
}

export default RegistroPage;
