import './productRatings.css';
import '../../fonts/Barlow_Condensed/BarlowCondensed-Regular.ttf';

export function ProductRatings(props) {
    return (
        <div className='ratings-container'>
            <span className='ratings-text'>Avaliações:</span>
            <img className='ratings-image' src='../src/assets/icons/static-stars.svg' alt='Avaliações'/>
            <span className='ratins-reputation'>Reputação do Produtor</span>
        </div>
    )
}

