import './footer.css'

export function Footer() {
    return(
        <footer>
            <div className='footer'>
                <div className='op'>
                    <h3>Ajuda</h3>
                    <h3>Contato</h3>
                    <h3>Termos de uso</h3>
                    <h3>Reportar erro</h3>
                </div>
                <div className="sobre">
                    <h3>Sobre</h3>
                    <h3>Sobre o IFNMG</h3>
                    <h3>Sobre o IFNMG</h3>
                    <span>Versão 1.0.0</span>
                </div>
                <div className="nos">
                    <h1>Meu Produtor</h1>
                    <h3>Desenvolvido por:</h3>
                    <h2>Erik Dionata e José Anderson</h2>
                </div>
            </div>
        </footer>
    )
}