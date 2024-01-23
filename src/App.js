

import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';



const Home = lazy(() => import('./pages/Home'));
const Flag = lazy(() => import('./pages/Flag'));
const FlagTypeA = lazy(() => import('./pages/FlagTypeA'));
const FlagTypeB = lazy(() => import('./pages/FlagTypeB'));
const Dinosaur = lazy(() => import('./pages/Dinosaur'));  
const DinosaurTypeA = lazy(() => import('./pages/DinosaurTypeA'));  
const DinosaurTypeB = lazy(() => import('./pages/DinosaurTypeB'));  
const Nonsense = lazy(() => import('./pages/Nonsense')); 
const NonsenseTypeA = lazy(() => import('./pages/NonsenseTypeA'));  
const Saja = lazy(() => import('./pages/Saja'));
const SajaTypeA = lazy(() => import('./pages/SajaTypeA'));  
const Not = lazy(() => import('./pages/Not'));  
const Main = lazy(() => import('./components/section/Main'));
 

const App = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={<Main />}>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/flag' element={<Flag />}  /> 
                    <Route path='/flagtypea' element={<FlagTypeA />}  /> 
                    <Route path='/flagtypeb' element={<FlagTypeB />}  /> 
                    <Route path='/dinosaur'  element={<Dinosaur />} />
                    <Route path='/dinosaurtypea'  element={<DinosaurTypeA />} />
                    <Route path='/dinosaurtypeb'  element={<DinosaurTypeB />} />
                    <Route path='/nonsense'  element={<Nonsense />} /> 
                    <Route path='/nonsensetypea'  element={<NonsenseTypeA />} />                     
                    <Route path='/saja'  element={<Saja />} />
                    <Route path='/sajatypea'  element={<SajaTypeA />} />
                    <Route path='/*'  element={<Not />} />
                </Routes>
            </Suspense>
        </BrowserRouter>

    );
}

export default App;