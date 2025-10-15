import React from 'react';
import Navbar from '../components/navbar'; 
import Footer from '../components/footer';

const ContactPage = () => {
  
  const contactImageUrl = "https://imgs.search.brave.com/ZV3N3hhHDocUCM39QyJaBrZkX0i89wx4Bz84gj-XfwI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/Zm9yYmVzLmNvbS5t/eC8yMDI0LzA0L2Nv/cGEtbXVuZGlhbC1m/dXRib2wtZmlmYS0u/d2VicA";

  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-[#EDE0FF] flex items-center justify-center py-16 px-6">
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 w-full max-w-6xl">
        
        <div className="flex-1 w-full max-w-md md:max-w-none">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#0B0B45] leading-tight mb-4">
            Alianzas Estratégicas para el Mundial 2026
          </h1>
          <p className="text-gray-600 mb-6">
            ¿Buscas una colaboración de merchandising, patrocinio o desarrollo de productos? Utiliza este formulario para conectar directamente con nuestro equipo de alianzas.
          </p>
          <img
            src={contactImageUrl}
            alt="Reunión de negocios y colaboración"
            className="w-full h-auto object-cover rounded-xl shadow-2xl transition-transform duration-500 hover:scale-[1.02]"
          />
        </div>

        <div className="flex-1 bg-gray-50 border border-gray-200 shadow-xl rounded-xl p-8 md:p-10 w-full max-w-lg">
          <h2 className="text-3xl font-extrabold text-[#0B0B45] mb-6 text-center">
            Formulario de Alianzas
          </h2>

          <form className="flex flex-col gap-5">
            <div>
              <label className="block text-gray-700 mb-1 font-semibold">Nombre de la Empresa</label>
              <input
                type="text"
                placeholder="Ej: Marca Deportiva S.A. de C.V."
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0B0B45] transition-colors"
                required
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-gray-700 mb-1 font-semibold">Nombre del Contacto</label>
                <input
                  type="text"
                  placeholder="Ej: Juan"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0B0B45] transition-colors"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1 font-semibold">Rol / Puesto</label>
                <input
                  type="text"
                  placeholder="Ej: Gerente de Ventas"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0B0B45] transition-colors"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 mb-1 font-semibold">Correo Electrónico Corporativo</label>
              <input
                type="email"
                placeholder="contacto@empresa.com"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0B0B45] transition-colors"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1 font-semibold">Interés Principal</label>
              <select
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0B0B45] bg-white transition-colors"
                required
              >
                <option value="" disabled selected>Selecciona un área de interés</option>
                <option value="Merchandising">Licencia de Merchandising</option>
                <option value="Patrocinio">Patrocinio de Eventos/Sedes</option>
                <option value="Tecnologia">Integración Tecnológica</option>
                <option value="Otro">Otro (Especificar en mensaje)</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700 mb-1 font-semibold">Detalles de la Propuesta</label>
              <textarea
                placeholder="Describe brevemente tu propuesta y las metas de tu empresa."
                rows={4}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0B0B45] transition-colors"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-[#0B0B45] text-white rounded-lg py-3 font-bold text-lg hover:bg-[#1A1A5F] transition-colors"
            >
              Enviar Propuesta
            </button>
          </form>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default ContactPage