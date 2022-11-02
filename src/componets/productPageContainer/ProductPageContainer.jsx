import { ImageContainer } from "../imageContainer/ImageContainer.jsx";
import "./productPageContainer.css";
import '../../fonts/Barlow/Barlow-SemiBold.ttf';
import '../../fonts/Barlow/Barlow-Regular.ttf';
import '../../fonts/Barlow/Barlow-Bold.ttf';

export function ProductPageContainer(props) {
  return (
    <div className="product-page-product-container">
      <div className="left-container">
        <ImageContainer />
      </div>
      <div className="right-container">
        <h2 id={"product-title"}>{props.title}</h2>
        <p className='product-produtor-normal'>Produzido e entregue por: 
        <span className='product-produtor-name'> {props.name}</span></p>
        <div className='ratings-container'>
            <span className='ratings-text'>Avaliações:</span>
            <img className='ratings-image' src='../src/assets/icons/static-stars.svg' alt='Avaliações'/>
            <span className='ratins-reputation'>Reputação do Produtor</span>
        </div>
        <div>
            <p className='price-paragraph'>R$ <span className='price-price'>{props.price}</span></p>
            <p className='price-payment-methods'>Pagamento via PIX ou presencialmente na retirada</p>
        </div>
      </div>
    </div>
  );
}
