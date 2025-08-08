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
                            Soy ingeniera en tecnología de software con experiencia en el desarrollo de aplicaciones web seguras, funcionales y escalables, tanto en el sector público como privado. Actualmente me desempeño colaborando en el análisis, diseño y construcción de sistemas estratégicos utilizando tecnologías como Angular, .NET Core y SQL, Oracle.
                        </p>
                        <p>He participado en proyectos de análisis espacial (Leaflet, Turf.js, PostGIS), desarrollo de SPAs, APIs REST y mejoras en plataformas de ecommerce. Me caracterizo por ser autodidacta, con pensamiento lógico, atención al detalle y compromiso con los resultados.</p>
                    </div>
                    <div className="img">
                        <img src={aboutImg} alt="" />
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