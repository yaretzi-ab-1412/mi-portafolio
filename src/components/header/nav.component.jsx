import './style.css';
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
                    <li><a className='text-white' href="/" onClick={toggleMenu}>Inicio</a></li>
                    <li><a className='text-white' href="/about" onClick={toggleMenu}>Sobre mí</a></li>
                    <li>
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