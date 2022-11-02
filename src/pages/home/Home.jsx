import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Products } from "../../componets/products/Products"
import {ProductPageContainer} from '../../componets/productPageContainer/ProductPageContainer';

import './home.css'

export function Home() {
    return (
        <Router>
                <Routes>

                    <Route exact path='/' element={<Products />} />

                    <Route path='/productpage/:id' element={<ProductPageContainer />} />

                    <Route path='*' element={<div><h1>Página não encontrada</h1></div>} />

                </Routes>
        </Router>
    )
}