import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home'));
const Flag = lazy(() => import('./pages/Flag'));
const Dinosaur = lazy(() => import('./pages/Dinosaur'));
const Nonsense = lazy(() => import('./pages/Nonsense'));
const Saja = lazy(() => import('./pages/Saja'));
const Not = lazy(() => import('./pages/Not'));  
const Main = lazy(() => import('./components/section/Main'));
 

const App = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={<Main />}>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/flag' element={<Flag />}  /> 
                    <Route path='/dinosaur'  element={<Dinosaur />} />
                    <Route path='/nonsense'  element={<Nonsense />} /> 
                    <Route path='/saja'  element={<Saja />} />
                    <Route path='/*'  element={<Not />} />
                </Routes>
            </Suspense>
        </BrowserRouter>

    );
}

export default App;