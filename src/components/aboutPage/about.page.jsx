import Navbar from "../header/nav.component"
import './style.css'
import aboutImg from '../../assets/me.png'
import Certificaciones from "./certificaciones.component"
import Footer from "../footer/footer.component"

const AboutPage=()=>{
    return (<>
    <header className="nav-about">
        <Navbar />
        <section className="about_us">
            <div className="container">
                <div className="about">
                    <div className="text">
                        <h3>Sobre mí</h3>
                        <p>
                            Soy desarrolladora web con experiencia en WordPress, WooCommerce, desarrollo frontend y creación de soluciones web personalizadas. He trabajado en sitios corporativos, tiendas en línea, personalización de temas, integración de APIs y optimización de procesos para ecommerce.
                        </p>
                        <p>
                            Además cuento con experiencia en Angular, .NET Core, SQL, Oracle y AS400/DB2, lo que me permite entender proyectos de forma integral, desde la interfaz hasta la lógica backend, bases de datos, seguridad y despliegue.
                        </p>
                        <p>
                            Me caracterizo por ser autodidacta, detallista y orientada a entregar soluciones funcionales, claras y mantenibles.
                        </p>
                    </div>
                    <div className="img">
                        <img src={aboutImg} alt="Yaretzi Arriaga" />
                    </div>
                </div>
            </div>
        </section>
    </header>
    <Certificaciones />
    <Footer />
    </>)
}

export default AboutPage
