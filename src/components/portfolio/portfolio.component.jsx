import PortfolioData from "./portfolio.data";
import './style.css';

const Portfolio = () => {
    return (
        <section id="portfolio">
            <div className="portfolio-container">
                <h2>Portafolio</h2>
                <p className="portfolio-intro">
                    Proyectos seleccionados de WordPress, WooCommerce, ecommerce y desarrollo web. Incluyen personalización de temas, integración de APIs, optimización de procesos y desarrollo de interfaces responsive.
                </p>
                {
                    PortfolioData.map((item, index) => (
                        <div className="portfolio-item" key={item.id || index}>
                            <div className="text">
                                {item.category && <span className="project-category">{item.category}</span>}
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                                {item.tech && (
                                    <div className="tech-list">
                                        {item.tech.map((tech) => <span key={tech}>{tech}</span>)}
                                    </div>
                                )}
                                <div>
                                    {item.link ? (
                                        <a href={item.link} target="_blank" rel="noopener noreferrer">{item.linkText || "Ver sitio"}</a>
                                    ) : (
                                        <span className="private-project">Proyecto privado / en desarrollo</span>
                                    )}
                                </div>
                            </div>
                            <div className="img">
                                <img src={item.img} alt={item.title} />
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Portfolio;
