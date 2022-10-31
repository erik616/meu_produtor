import { Producttitle } from "../producttitle/Producttitle.jsx";
import { Imagecontainer } from "../imageContainer/Imagecontainer.jsx";
import { Productprodutor } from "../productprodutor/Productprodutor.jsx";
import { ProductRatings } from "../productRatings/ProductRatings.jsx";
import { ProductPrice } from "../productPrice/ProductPrice.jsx";
import "./productpage_productcontainer.css";

export function Productpage_productcontainer() {
  return (
    <div className="product-page-product-container">
      <div className="left-container">
        <Imagecontainer />
      </div>
      <div className="right-container">
        <Producttitle title={"Manteiga de Garrafa Paraíso de Minas - 500ml"} />
        <Productprodutor name="Maria Eunice" />
        <ProductRatings />
        <ProductPrice price="24,90" />
      </div>
    </div>
  );
}
