import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { LINK } from '../../../backend/index'

import { Producttitle } from "../producttitle/Producttitle.jsx";
import { Imagecontainer } from "../imageContainer/Imagecontainer"
import { NavBar } from "../../layout/navBar/NavBar";
import { Page } from "../../layout/page/Page";
import { Footer } from "../../layout/footer/Footer";

export function Productpage_productcontainer() {

    const { id } = useParams()

    const [product, setProduct] = useState([])

    useEffect(() => {

        // setTimeout(() => {

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
        //

    }, [id])

    return (
        <>
            <NavBar />
            <Page>
                <Imagecontainer />
                <Producttitle />
                <div>
                    <h1>{product.nome}</h1>
                    <h1>{product.preco}</h1>
                </div>
            </Page>
            <Footer />
        </>
    )
}