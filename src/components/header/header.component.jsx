import Navbar from "./nav.component"
import headerImg from "../../assets/it.png"
import { HashLink } from 'react-router-hash-link';

const Header = () => {
    return(<>
        <header>
            <Navbar/>
            <div className="container content">
                <div className="text-content">
                    <span>Web Developer</span>
                    <h1>Hola, mi nombre <br />es Yaretzi Arriaga</h1>
                    <p>Transformo ideas en interfaces elegantes con Angular. <br />Desarrollo web fullstack con enfoque visual,<br />soluciones ágiles y experiencias que conectan. ✨</p>
                    <div className="btn">
                        {/* Enlace interno que usa HashLink para navegar a una sección de la página */}
                        <div className="btn-item">
                            <HashLink to="#portfolio">Proyectos</HashLink>
                        </div>
                        
                        {/* Enlace externo a LinkedIn, se mantiene como <a> */}
                        <div className="btn-item">
                            <a href="https://www.linkedin.com/in/yaretzi-a-briones/" target="_blank" rel="noopener noreferrer">
                                LinkedIn
                            </a>
                        </div>
                    </div>  
                </div>
                <div className="img">
                    <img src={headerImg} alt="" />
                </div>
            </div>
        </header>
    </>)
}

export default Header