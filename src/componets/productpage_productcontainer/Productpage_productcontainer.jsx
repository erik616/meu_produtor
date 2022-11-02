import { ImageContainer } from "../imageContainer/ImageContainer.jsx";
import "./productpage_productcontainer.css";
import '../../fonts/Barlow/Barlow-SemiBold.ttf';
import '../../fonts/Barlow/Barlow-Regular.ttf';
import '../../fonts/Barlow/Barlow-Bold.ttf';
import { NavBar } from "../../layout/navBar/NavBar.jsx";
import { Page } from "../../layout/page/Page.jsx";
import { Footer } from "../../layout/footer/Footer.jsx";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { LINK } from "../../../backend/index.js";

export function ProductPageContainer() {
  const { id } = useParams()

  const [product, setProduct] = useState([])

  useEffect(() => {
    fetch(`${LINK}/produtos/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((resp) => resp.json())
      .then((data) => {
        setProduct(data)
        console.log(data)
      })
      .catch(err => console.log)

  }, [id])


  function topo() {
    parent.scroll(0, 0);
  }
  topo()

  return (
    <>
      <NavBar />
      <Page>
        <div className="product-page-product-container">
          <div className="left-container">
            <ImageContainer src={product.foto} />
          </div>
          <div className="right-container">
            <h2 id={"product-title"}>{product.nome}</h2>
            <p className='product-produtor-normal'>Produzido e entregue por:
              <span className='product-produtor-name'> {product.produtor}</span></p>
            <div className='ratings-container'>
              <span className='ratings-text'>Avaliações:</span>
              <img className='ratings-image' src='../src/assets/icons/static-stars.svg' alt='Avaliações' />
              <span className='ratins-reputation'>Reputação do Produtor</span>
            </div>
            <div>
              <p className='price-paragraph'>R$ <span className='price-price'>{product.preco}</span></p>
              <p className='price-payment-methods'>Pagamento via PIX ou presencialmente na retirada</p>
            </div>
          </div>
        </div>
      </Page>
      <Footer />
    </>
  );
}
