import React from 'react'
import './App.css';
import { Routes , Route , Link } from 'react-router-dom';
import First_page from './Componats/First_page';
import Home from './Componats/Home';

const App = () => {
  return (
    <div className='app'>
        
       
        <Routes>
            <Route path='/' element={<First_page />} />
            <Route path='/Home' element={<Home />} />
        </Routes>
   
    </div>
  )
}

export default App
