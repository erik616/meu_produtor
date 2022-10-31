import { Footer } from "../../componets/footer/Footer";
import { NavBar } from "../../componets/navBar/NavBar";
import { Products } from "../../componets/products/Products";
import { Productpage_productcontainer } from "../../componets/productPage_productContainer/ProductPage_ProductContainer";
export function Home() {
  return (
    <>
      <NavBar />
      {/* <Productpage_productcontainer /> */}
      <Products />
      <Footer />
    </>
  );
}
