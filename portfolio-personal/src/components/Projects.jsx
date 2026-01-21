import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Simulador de Lámparas",
    description:
      "Aplicación interactiva que simula el encendido y apagado de lámparas, enfocada en la práctica de lógica con JavaScript.",
    tech: ["HTML", "CSS", "JavaScript"],
    image:
      "simulador.png",
    link: "https://github.com/piazz77/proyecto",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const card = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

function Projects() {
  return (
    <motion.section
      id="projects"
      className="projects"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.h2 variants={card}>Proyectos</motion.h2>

      <motion.p variants={card} className="projects__intro">
        Algunos de los proyectos que desarrollé para practicar y aplicar
        conceptos de frontend y backend.
      </motion.p>

      <div className="projects__grid">
        {projects.map((project) => (
          <motion.article
            key={project.id}
            className="project__card"
            variants={card}
            whileHover={{ y: -12 }}
            whileTap={{ scale: 0.98 }}
          >
            <img
              src={project.image}
              alt={`Imagen del proyecto ${project.title}`}
              className="project__image"
              loading="lazy"
            />

            <div className="project__content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="project__tech">
                {project.tech.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project__link"
              >
                Ver proyecto →
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}

export default Projects;
