// import { useState } from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Contato from './pages/Contato'

function App() {

  return (
    <BrowserRouter>
      <div className='min-h-screen bg-gray-50'>
          <Menu/>
          <div className='max-w-4xl mx-auto'>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/sobre' element={<Sobre/>}/>
              <Route path='/contato' element={<Contato/>}/>
            </Routes>
          </div>
      </div>
    </BrowserRouter>

  );
}

export default App
