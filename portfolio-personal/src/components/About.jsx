import { motion } from "framer-motion";
import { container, fadeUpItem } from "../animations";

function About() {
  return (
    <motion.section
      className="about"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="about__left">
        <motion.div
          className="about__avatar-wrap"
          variants={fadeUpItem}
          whileHover={{ scale: 1.05, rotate: 2 }}
        >
          <img
            src="/assets/react.svg"
            alt="Avatar"
            className="about__avatar"
          />
        </motion.div>
      </div>

      <div className="about__right">
        <motion.h2 variants={fadeUpItem}>Sobre mí</motion.h2>

        <motion.p variants={fadeUpItem}>
          Soy graduada de la tecnicatura universitaria en Programación de la
          Facultad Tecnológica de Tucumán. Me especializo en el desarrollo web
          front-end y back-end. Me encanta aprender nuevas tecnologías y mejorar
          mis habilidades constantemente. Soy una persona proactiva,
          responsable y con muchas ganas de crecer profesionalmente.
        </motion.p>


<motion.div className="skills" variants={container}>
    
    {["HTML", "CSS", "JAVASCRIPT", "REACT", "NODE.JS", "EXPRESS", "MONGODB"].map((skill) => (
        <motion.span
        key={skill}
        className="chip"
        variants={fadeUpItem}
        whileHover={{y: -4}}
        >
            {skill}
        </motion.span>
    ))}
</motion.div>
        </div>
    </motion.section>
  );
}
    

    

export default About;
