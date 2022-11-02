import "./imagecontainer.css";

export function ImageContainer(props) {
    return (
        <div className="image-container">
            <div className="image-side-container">
                <img className="images-side" src={props.foto} />
                <img className="images-side" src={props.foto}
                    alt="img-3" />
                <img className="images-side" src={props.foto}
                    alt="img-4" />
                <div className='arrow-side-container'>
                    <img id="arrow-down-side-container" src="../src/assets/icons/Chevrondown-arrow-side-image-container.svg" alt="mais imagens" />
                </div>
            </div>
            <img id="image-main"src={props.foto}
            alt="main-img" />
        </div>
    )
}
