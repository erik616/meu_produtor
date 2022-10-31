import './productPrice.css';
import '../../fonts/Barlow/Barlow-Bold.ttf';

export function ProductPrice(props) {
    return (
        <div>
            <p className='price-paragraph'>R$ <span className='price-price'>{props.price}</span></p>
            <p className='price-payment-methods'>Pagamento via PIX ou presencialmente na retirada</p>
        </div>
    )
}