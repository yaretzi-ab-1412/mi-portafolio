import './style.css';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { useState } from 'react'; // Importa useState

const Navbar = () => {
    // 1. Estado para controlar la visibilidad del menú
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // 2. Función para alternar el estado del menú
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="container navbar">
            <div className="logo"><h3>Yaretzi Arriaga</h3></div>
            {/* 3. Botón de hamburguesa que llama a toggleMenu */}
            <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
            {/* 4. La clase 'active' se agrega si isMenuOpen es true */}
            <nav className={isMenuOpen ? 'active' : ''}>
                <ul>
                    <li>
                        {/* Cambiado de <a> a <Link> y href a to */}
                        <Link className='text-white' to="/" onClick={toggleMenu}>
                            Inicio
                        </Link>
                    </li>
                    <li>
                        {/* Cambiado de <a> a <Link> y href a to */}
                        <Link className='text-white' to="/about" onClick={toggleMenu}>
                            Sobre mí
                        </Link>
                    </li>
                    <li>
                        {/* Este ya estaba correcto */}
                        <HashLink className='text-white' smooth to="/#portfolio" onClick={toggleMenu}>
                            Portafolio
                        </HashLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;