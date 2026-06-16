import rodioStore from "../../assets/rodio-store.svg";
import wpSync from "../../assets/wp-sync.svg";
import algoliaSearch from "../../assets/algolia-search.svg";
import project1 from "../../assets/project1.png";
import project2 from "../../assets/project2.png";
import project3 from "../../assets/project3.png";
import project4 from "../../assets/project4.png";
import project5 from "../../assets/project5.png";
import project6 from "../../assets/project6.png";

const PortfolioData = [
    {
        id: 1,
        img: rodioStore,
        title: "Rodio Store",
        category: "WordPress / WooCommerce",
        desc: "Tienda WooCommerce personalizada con integración de múltiples proveedores, sincronización de catálogo, precios e inventario, reglas de stock, checkout personalizado y despliegue en AWS Lightsail.",
        tech: ["WordPress", "WooCommerce", "PHP", "MySQL", "APIs REST", "AWS"],
        link: ""
    },
    {
        id: 2,
        img: wpSync,
        title: "WooCommerce Custom Sync Plugin",
        category: "Plugin Development",
        desc: "Desarrollo de plugin para sincronización de productos por lotes, control de proveedores, actualización de precio e inventario, manejo de logs, cron jobs y optimización para catálogos grandes.",
        tech: ["PHP", "WordPress Hooks", "WooCommerce", "Cron", "MySQL"],
        link: ""
    },
    {
        id: 3,
        img: algoliaSearch,
        title: "Algolia Search Experience",
        category: "Ecommerce Search",
        desc: "Mejora de experiencia de búsqueda para ecommerce, integrando resultados tipo autocomplete, comportamiento personalizado al presionar Enter y renderizado de productos en formato grid.",
        tech: ["JavaScript", "Algolia", "WooCommerce", "UX", "CSS"],
        link: ""
    },
    {
        id: 4,
        img: project1,
        title: "APÉRO Wine",
        category: "Shopify / Ecommerce",
        desc: "Tienda Shopify desarrollada a partir de diseño personalizado. Implementación de secciones dinámicas, estilos adaptativos y optimización móvil.",
        tech: ["Shopify", "Liquid", "CSS", "Responsive"],
        link: "https://www.aperowine.com/"
    },
    {
        id: 5,
        img: project2,
        title: "Melee Mats",
        category: "Shopify / Ecommerce",
        desc: "Tienda Shopify con enfoque en experiencia de usuario. Desarrollo de componentes reutilizables, responsive design y personalización del tema base.",
        tech: ["Shopify", "Liquid", "UX", "CSS"],
        link: "https://meleemats.com/"
    },
    {
        id: 6,
        img: project3,
        title: "Homeopática Monterrey",
        category: "Shopify / Ecommerce",
        desc: "Tienda Shopify desarrollada con base en diseño personalizado. Implementación visual precisa, estructura clara y adaptación a dispositivos móviles.",
        tech: ["Shopify", "CSS", "Responsive"],
        link: "https://homeopaticamty.com/"
    },
    {
        id: 7,
        img: project4,
        title: "Anchor Maritime Services",
        category: "Sitio corporativo",
        desc: "Sitio estático orientado a servicios marítimos. Desarrollo basado en diseño entregado, estructura clara y adaptación a distintos dispositivos.",
        tech: ["HTML", "CSS", "Responsive"],
        link: "https://scanchor.com/"
    },
    {
        id: 8,
        img: project5,
        title: "Triton Maritime",
        category: "Landing Page",
        desc: "Landing page profesional con foco en identidad visual. Desarrollo responsive fiel al diseño entregado, estructura informativa y diseño modular.",
        tech: ["HTML", "CSS", "Responsive"],
        link: "https://www.tritonmaritime.mx/"
    },
    {
        id: 9,
        img: project6,
        title: "Gontor Ingeniería",
        category: "Landing Page",
        desc: "Landing page corporativa construida desde cero con HTML/CSS y diseño proporcionado. Desarrollo centrado en estructura modular y navegación clara.",
        tech: ["HTML", "CSS", "Responsive"],
        link: "https://www.gontor.com/v2020/index.html"
    }
]

export default PortfolioData
