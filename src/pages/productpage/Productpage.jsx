import { NavBar } from "../../layout/navBar/NavBar";
import { Footer } from "../../layout/footer/Footer";
import { ProductPageContainer } from "../../componets/productPageContainer/ProductPageContainer";

import "./productpage.css";

export function ProductPage() {
    return (
        <>
            <NavBar />
            <ProductPageContainer />
            <Footer />
        </>
    )
}