import React from 'react'
import './App.css';
import { Routes , Route , Link } from 'react-router-dom';
import First_page from './Componats/First_page';
import Home from './Componats/Home';
import Jaiser from './Componats/Jai/Jaiser';
import Kiruthika from "./Componats/Kiruthika";
import Player from './Componats/Lobiya/pages/Player';
import Netflix from './Componats/Lobiya/pages/Netflix';
import Home1 from './Componats/Savitha/home/Home1';


const App = () => {
  return (
    <div className='app'>
        
       
        <Routes>
            <Route path='/' element={<First_page />} />
            <Route path='/Home' element={<Home />} />
            <Route path='/Jai' element={<Jaiser />}/>
            <Route path='/Kiruthika' element={<Kiruthika />}/>
            <Route exact path="/player" element={<Player />} />
            <Route exact path="/Lobiya" element={<Netflix />} />
            <Route path='/Savitha' element={<Home1 />} />
        </Routes>
   
    </div>
  )
}

export default App
