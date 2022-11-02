import { Footer } from "../../componets/footer/Footer";
import { NavBar } from "../../componets/navBar/NavBar";
import { Products } from "../../componets/products/Products";
import { ProductPageContainer } from "../../componets/productPageContainer/ProductPageContainer";

export function Home() {
  return (
    <>
      <NavBar />
      {/* <Products /> */}
      <ProductPageContainer title={"Manteiga de Garrafa Paraíso de Minas - 500ml"}
        name={"Maria Eunice"} price={"24,90"}/>
      <Footer />
    </>
  )
}
