import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { LINK } from "../../../backend";

export function Product() {
    const { id } = useParams()

    const [product, setProduct] = useState([])

    useEffect(() => {

        // setTimeout(() => {
            fetch(`${LINK}/produtos/:${id}`, {
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
        // }, 1000)

    }, [id])

    return (
        <>
            <h1>{product.name}</h1>
        </>
    )
}