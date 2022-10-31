import { Imagesidecontainer } from "../imageSideConteiner/ImageSideContainer"
import "./imagecontainer.css"

export function Imagecontainer() {
    return (
        <div className="image-container">
            <Imagesidecontainer />
            <img id="image-main"src="http://conteudo.imguol.com.br/c/entretenimento/8b/2021/08/27/manteiga-de-garrafa-1630068964238_v2_779x800.png"
             alt="main-img" />
        </div>
    )
}