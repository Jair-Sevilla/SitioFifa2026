import React from "react";

const Contacto = () => {
  return (
    <div className="min-h-screen bg-[#EDE0FF] flex items-center justify-center px-6">
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 w-full max-w-4xl">
        
        {/* Texto izquierda */}
        <div className="flex-1 flex flex-col justify-center items-center text-center">
          <h1 className="text-7xl font-extrabold text-[#0B0B45] leading-tight">
            FIFA
          </h1>
          <p className="text-5xl font-bold text-[#0B0B45] mt-2">2026</p>
        </div>

        {/* Formulario derecha */}
        <div className="flex-1 bg-white shadow-lg rounded-xl p-10 w-full max-w-md">
          <h2 className="text-3xl font-extrabold text-[#0B0B45] mb-6 text-center">
            Contáctanos
          </h2>

          <form className="flex flex-col gap-5">
            <div>
              <label className="block text-gray-700 mb-1">Nombre</label>
              <input
                type="text"
                placeholder="Valor"
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1">Apellido</label>
              <input
                type="text"
                placeholder="Valor"
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1">Correo Electrónico</label>
              <input
                type="email"
                placeholder="Valor"
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1">Mensaje</label>
              <textarea
                placeholder="Valor"
                rows={4}
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-black text-white rounded-md py-3 hover:bg-gray-800 transition"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
