import './imageSideContainer.css'
//TODO inserir campos de mais imagens no json
export function Imagesidecontainer() {
    return(
        <div className="image-side-container">
            <img className="images-side" src="https://t.imgac.net/receita/manteiga-de-garrafa-8799_300x.jpg"
                alt="img-2" />
            <img className="images-side" src="https://s2.glbimg.com/lLhPB9VhKDBZcfJf05fq1Jpv4eU=/e.glbimg.com/og/ed/f/original/2014/08/21/historiade2-copy.jpg"
                alt="img-3" />
            <img className="images-side" src="https://i0.wp.com/pratofundo.com/wp-content/uploads/comosefaz-manteigaclarificadatipos.jpg"
                alt="img-4" />
            <div className='arrow-side-container'>
                <img id="arrow-down-side-container" src="../src/assets/icons/Chevrondown-arrow-side-image-container.svg" alt="mais imagens" />
            </div>
        </div>
    )
}