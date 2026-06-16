import Navbar from "./nav.component"
import headerImg from "../../assets/it.png"
import { HashLink } from 'react-router-hash-link';

const Header = () => {
    return(<>
        <header>
            <Navbar/>
            <div className="container content">
                <div className="text-content">
                    <span>WordPress / WooCommerce Developer</span>
                    <h1>Hola, mi nombre <br />es Yaretzi Arriaga</h1>
                    <p>
                        Desarrollo sitios WordPress, tiendas WooCommerce y soluciones web personalizadas.
                        Tengo experiencia creando integraciones con APIs, automatizaciones, personalización de temas,
                        optimización de procesos y despliegues en entornos cloud.
                    </p>
                    <div className="skills-line">
                        <span>WordPress</span>
                        <span>WooCommerce</span>
                        <span>PHP</span>
                        <span>JavaScript</span>
                        <span>APIs REST</span>
                        <span>AWS</span>
                    </div>
                    <div className="btn">
                        <HashLink to="#portfolio">Proyectos</HashLink>
                        <a href="https://www.linkedin.com/in/yaretzi-a-briones/" target="_blank" rel="noopener noreferrer">
                            LinkedIn
                        </a>
                    </div>  
                </div>
                <div className="img">
                    <img src={headerImg} alt="Yaretzi Arriaga" />
                </div>
            </div>
        </header>
    </>)
}

export default Header
