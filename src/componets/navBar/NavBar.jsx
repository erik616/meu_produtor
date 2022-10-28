import { HiOutlineShoppingBag } from 'react-icons/hi'
import { MagnifyingGlass } from 'phosphor-react'
import './NavBar.css'

export function NavBar() {
    return (
        <nav className='nav'>
            <div className='menu'>
                <div className="navbar-container container">
                    <input type="checkbox" name="" id="" />
                    <div className="hamburger-lines">
                        <span className="line line1"></span>
                        <span className="line line2"></span>
                        <span className="line line3"></span>
                    </div>
                </div>
                <div className='name'>
                    <h1>Meu Produtor</h1>
                </div>
                <div className='search'>
                    <MagnifyingGlass size="32" />
                </div>
            </div>
            <div className="options">
                <div className='basket'>
                    <HiOutlineShoppingBag size="32" />
                </div>
            </div>
        </nav>
    )
}