

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Corprimaria from './pages/corprimaria';
import FreqCaracteres from './pages/FreqCaracateres';
import Ingressocinema from './pages/ingressocinema';
import Nummaior from './pages/nummaior';
import Home from './pages/home'

export default function siteRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/corprimaria' element={<Corprimaria/>}></Route>
                <Route path='/FreqCaracteres' element={<FreqCaracteres/>}></Route>
                <Route path='/ingressocinema' element={<Ingressocinema/>}></Route>
                <Route path='/nummaior' element={<Nummaior/>}></Route>  
            </Routes>
        </BrowserRouter>
    )
}