import { Link } from 'react-router-dom'

import { useEffect, useState } from 'react'
import './products.css'

import { HiOutlineShoppingBag } from 'react-icons/hi'

import { LINK } from '../../../backend/index'
//import { Card } from '../productcard/card'

import { Load } from '../../layout/loading/Loading'
import { NavBar } from '../../layout/navBar/NavBar'
import { Footer } from '../../layout/footer/Footer'
import { Page } from '../../layout/page/Page'


export function Products() {
    const [produtos, setProdutos] = useState([])
    const [removeLoad, setRemoveload] = useState(false)

    useEffect(() => {
        setTimeout(() => {
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
                    setRemoveload(true)
                })
                .catch(err => console.log(err))
        }

        getProdutos()
        },1000)
    }, [])

    return (
        <>
        <NavBar />
        <Page>
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
                        <Link to={`/productpage/${item.id}`}>
                            <button type='button' className="button">
                                <HiOutlineShoppingBag size="24" />
                            </button>
                        </Link>
                    </div>
                </div>
            ))}
            {!removeLoad && <Load/>}
            {removeLoad && produtos.length === 0 && (
                <h1>Não a produtos</h1>
            )}
        </div>
        </Page>
        <Footer />
        </>
    )
}