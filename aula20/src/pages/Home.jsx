function Home(){
    return (
        <div className="text-center p-8 ">
            <h1 className="text-4xl font-bold text-blue-600 mb-4">
                Página inicial
            </h1>
            <p className="text-lg text-gray-600">
                Bem-vindo ao meu app com React Router
            </p>
            <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                <h2 className="text-xl font-semibold mb-2">O que voce encontra aqui</h2>
                <ul className="text-lef space-y-2 ">
                    <li>👽Navegação simples</li>
                    <li>👽 Multiplas Páginas</li>
                    <li>👽 Multiplas Páginas</li>
                </ul>
            </div>
        </div>
    );
}

export default Home;