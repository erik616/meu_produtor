import { NavBar } from "../../layout/navBar/NavBar";
import { Footer } from "../../layout/footer/Footer";
import { ProductPageContainer } from "../../componets/productPageContainer/ProductPageContainer";
import { LINK } from '../../../backend/index';

import "./productpage.css";

export function ProductPage() {

    return (
        <>
            <NavBar />
            <ProductPageContainer
             name="Maria Eunice" title="Manteiga de Garrafa Paraiso de Minas - 500ml"
             price="25,50" />
            <Footer />
        </>
    )
}