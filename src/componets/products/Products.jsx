import { useEffect, useState } from 'react'
import './products.css'

import { LINK } from '../../../backend/index'


export function Products() {
    const [produtos, setProdutos] = useState([])

    useEffect(() => {
        function getProdutos() {
            fetch(`${LINK}/produtos`, {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json',
                }
            })
                .then(resp => resp.json())
                .then(data => {
                    console.log(data)
                    setProdutos(data)
                })
                .catch(err => console.log(err))
        }

        getProdutos()

    },[])


    return (
        <div className="products">
            <div className="card">
                <div className='foto'>
                    <img src="" alt="" />
                </div>
                <div className="info">

                </div>
            </div>
        </div>
    )
}