import PortfolioData from "./portfolio.data";
import './style.css';

const Portfolio = () => {
    return (
        <section id="portfolio">
            <div className="portfolio-container">
                <h2>Portafolio</h2>
                {
                    PortfolioData.map((item, index) => (
                        <div className="portfolio-item" key={index}>
                            <div className="text">
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                                <div>
                                    <a href={item.link} target="_blank">Ver sitio</a>
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
