import React from "react";

const Contacto = () => {
  return (
    <div className="min-h-screen bg-[#EDE0FF] flex flex-col items-center justify-center py-10">
      {/* Título */}
      <h1 className="text-5xl font-extrabold text-[#0B0B45]">FIFA</h1>
      <p className="text-2xl text-[#0B0B45] mb-10">2026</p>

      {/* Formulario */}
      <div className="bg-white shadow-md rounded-md p-8 w-[350px]">
        <form className="flex flex-col gap-4">
          <div>
            <label className="block text-gray-700 mb-1">Nombre</label>
            <input
              type="text"
              placeholder="Valor"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Apellido</label>
            <input
              type="text"
              placeholder="Valor"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Correo Electrónico</label>
            <input
              type="email"
              placeholder="Valor"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Mensaje</label>
            <textarea
              placeholder="Valor"
              rows={3}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-black text-white rounded-md py-2 hover:bg-gray-800 transition"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contacto;
