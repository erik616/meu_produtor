import "./imagecontainer.css";

export function ImageContainer({src}) {
    return (
        <div className="image-container">
            <div className="image-side-container">
                <img className="images-side" src={src} />
                <img className="images-side" src={src}
                    alt="img-3" />
                <img className="images-side" src={src}
                    alt="img-4" />
                <div className='arrow-side-container'>
                    <img id="arrow-down-side-container" src={src} />
                </div>
            </div>
            <img id="image-main"src={src}
            alt="main-img" />
        </div>
    )
}