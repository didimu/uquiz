import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Flag from './pages/Flag';
import Dinosaur from './pages/Dinosaur';
import Nonsense from './pages/Nonsense';
import Saja from './pages/Saja';
import Not from './pages/Not';  
import Main from './components/section/Main';
import Footer from './components/section/Footer';
import Header from './components/section/Header';
 

const App = () => {
    return (
        <BrowserRouter> 
            <Header />
            <Main>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/flag' element={<Flag />}  /> 
                    <Route path='/dinosaur'  element={<Dinosaur />} />
                    <Route path='/nonsense'  element={<Nonsense />} /> 
                    <Route path='/saja'  element={<Saja />} />
                    <Route path='/*'  element={<Not />} />
                </Routes>
            </Main>
            <Footer />    
        </BrowserRouter>
    );
}

export default App;