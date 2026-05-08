// import React from "react";

const Sobre = () => {
  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold text-gray-600 mb-6">Sobre nós</h1>
      <div className="max-2xl:">
        <p className="text-lg text-gray-700 mb-4">
          Projeto simples para React Router.
        </p>
        <p className="text-gray-600 mb-6">
          Aqui você verá a nabegação simples entre páginas sem recarregar a
          página.
        </p>
      </div>
      <div className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-xl font-semibold text-green-800 mb-3">
            Tecnologias Usadas:
        </h2>
        <ul className="space-y-2 text-green-700">
            <li>React 18</li>
            <li>Vite</li>
            <li>React Router</li>
            <li>Tailwind CSS</li>
        </ul>
      </div>
    </div>
  );
};

export default Sobre;
