import { useEffect, useState } from 'react'
import './products.css'

import { HiOutlineShoppingBag } from 'react-icons/hi'

import { LINK } from '../../../backend/index'
import { Key } from 'phosphor-react'
//import { Card } from '../productcard/card'


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

    }, [])


    return (
        <div className="products">
            {produtos.length > 0 && produtos.map((item) => (
                <div className="card" key={item.id}>
                    <div className='foto'>
                        <img src={item.foto} alt="" />
                    </div>
                    <div className="info">
                        <h2>{item.nome}</h2>
                        <span>{item.volume}</span>
                        <h2>R$ {item.preco}</h2>
                        <button type='button' className="button">
                            <HiOutlineShoppingBag size="24" />
                        </button>
                    </div>
                </div>
            ))}
            {produtos.length === 0 && (
                <h1>Não a produtos</h1>
            )}
        </div>
    )
}