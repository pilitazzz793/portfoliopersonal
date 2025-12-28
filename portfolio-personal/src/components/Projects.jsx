import {motion} from "framer-motion";



const projects =[
    {
        id: 1,
        title: "E-commerce Gamer",
        description: "Tienda online con carrito, login y panel de administracion.",
        tech: ["HTML", "CSS", "JAVASCRIPT", "Node.JS", "MYSQL"],
        image: "https://imagenes.compragamer.com/bannerPrincipal/DC_20251218142627_KQgYnNH0.jpg",
        link: "https://github.com/PilarNadal/E-commerce-Gamer"
    },
    {
        id:2,
        title:"Simulador de lamparas",
        description: "Simulador de encendido y apagado de lamparas con JS.",
        tech: ["HTML", "CSS", "JAVASCRIPT", "NODE.JS", "MYSQL"],
        image:"https://dcdn-us.mitiendanube.com/stores/005/625/292/products/celestia2-cf0b1533a6a8674d7117597646653472-480-0.webp",
        link:"#"
    }
];

const container ={
    hidden:{},
    visible:{
        transition:{
            staggerChildren: 0.2
        }
    }
};

const card ={
    hidden:{opacity:0, y: 30},
    visible:{
        opacity: 1,
        y:0,
        transition:{ duration:0.6, ease: "easeOut" }
    }
};

function Projects(){
    return(
        <motion.section
        className="projects"
        variants={container}
        initial= "hidden"
        whileInView="visible"
        viewport={{ once: true}}
        >
            <motion.h2 variants={card}>Proyectos</motion.h2>

            <div className="projects__grid">
                {projects.map((project) => (
                    <motion.article
                    key={project.id}
                    className="project__card"
                    variants={card}
                    whileHover={{ y: -10 }}
                    >
                        <img
                        src={project.image}
                        alt={project.title}
                        className="project__image"
                        />
                        <div className="project__content">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>

                            <div className="project__tech">
                                {project.tech.map((t)=>(
                                    <span key={t}>{t}</span>))}
                            </div>

                            <a
                            href={project.link}
                            target="_blank"
                            rel="noreferrer"
                            className="project__link"
                            >
                                Ver proyecto
                            </a>
                        </div>
                    </motion.article>
                ))}
            </div>
        </motion.section>
    );
}

export default Projects;