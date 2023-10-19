import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Flag from './pages/Flag';
import Dinosaur from './pages/Dinosaur';
import Nonsense from './pages/Nonsense';
import Saja from './pages/Saja';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/flag' element={<Flag />} />
                <Route path='/dinosaur' element={<Dinosaur />} />
                <Route path='/nonsense' element={<Nonsense />} /> 
                <Route path='/saja' element={<Saja />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;