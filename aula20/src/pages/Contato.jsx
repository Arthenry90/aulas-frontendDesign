import { useState } from 'react'

function Contato(){
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [mensagem, setMensagem] = useState('');

    const HandlerSubmmit = (m) => {
        m.preventDefault();
        alert(`Obrigado, ${nome}! Mensagem enviada.`)
        setNome('');
        setEmail('');
        setMensagem('');
    }
    return(
        <div className='p-8 max-w-md mx-auto'>
            <h1 className='text-4xl font-bold text-purple-600 mb-6'>
                Contato
            </h1>

            <form onSubmit={HandlerSubmmit} className='space-y-4'>
                <div>
                    <label className='block text-gray-600 font-semibold mb-2'>
                        Nome: 
                    </label>
                    <input 
                    type="text" 
                    value={nome}
                    onChange={(m) => setNome(m.target.value)}
                    className='w-full p-3 border border-gray-300 rounded-b-lg focus:outline-none
                    focus:ring-purple-500 focus:ring-2'
                    placeholder='Seu nome'
                    required
                    />
                </div>
                <div>
                    <label className='block text-gray-600 font-semibold mb-2'>
                        E-mail: 
                    </label>
                    <input 
                    type="email" 
                    value={email}
                    onChange={(m) => setEmail(m.target.value)}
                    className='w-full p-3 border border-gray-300 rounded-b-lg focus:outline-none
                    focus:ring-purple-500 focus:ring-2'
                    placeholder='seuemail@email.com'
                    required
                    />
                </div>
                <div>
                    <label className='block text-gray-600 font-semibold mb-2'>
                        Mensagem: 
                    </label>
                    <textarea 
                    value={mensagem}
                    onChange={(m) => setMensagem(m.target.value)}
                    rows="4"
                    className='w-full p-3 border border-gray-300 rounded-b-lg focus:outline-none
                    focus:ring-purple-500 focus:ring-2'
                    placeholder='Sua mensagem...'
                    required
                    />
                </div>
                <button type='submit' className='w-full bg-purple-600 text-white py-3 px-4 rounded-lg hover:bg-purple-800
                transition-colors font-semibold'>
                    Enviar Mensagem
                </button>
            </form>
        </div>
    );
}

export default Contato