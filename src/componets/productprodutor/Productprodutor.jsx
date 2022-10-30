import './productprodutor.css';
import '../../fonts/Barlow/Barlow-Regular.ttf';

export function Productprodutor(props) {
    return (
        <p className='product-produtor-normal'>Produzido e entregue por: 
        <span className='product-produtor-name'> {props.name}</span></p>
    )
}
