import { Link } from "react-router-dom"
import "../styles/NavBar.css"

export default function NavBar(){
    return(
        <nav className="navbar container">
            <Link to="/" className="navbar-brand">
                <div className="logo-icon"></div>
                <span className="logo-text">GPObras</span>
            </Link>

            <div className="navbar-links">
                <Link className="nav-link" to="/">Início</Link>
                <Link className="nav-link" to="/ferramentas">Ferramentas</Link>
                <Link className="nav-link" to="/precos">Preços</Link>
            </div>
            
            <div className="navbar-actions">
                <Link className="btn-text" to="/entrar">Entrar</Link>
                <Link className="btn-primary-small" to="/demonstracao">Demonstração</Link>
            </div>
        </nav>
    )
}