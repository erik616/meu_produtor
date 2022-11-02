import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Products } from "../../componets/products/Products"
import { Productpage_productcontainer } from '../../componets/productPage_productContainer/Productpage_productcontainer';

import './home.css'

export function Home() {
    return (
        <Router>
                <Routes>

                    <Route exact path='/' element={<Products />} />

                    <Route path='/productpage/:id' element={<Productpage_productcontainer />} />

                    <Route path='*' element={<div><h1>Página não encontrada</h1></div>} />

                </Routes>
        </Router>
    )
}