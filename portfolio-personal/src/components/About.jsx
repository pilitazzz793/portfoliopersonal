import {motion} from 'framer-motion';
import {fadeUp} from '../animations';

function About (){
    return(
        <motion.section
        variants={fadeUp}
        initial='hidden'
        whileInView='visible'
        viewport={{once: true}}
        >
            <div className="about__left">
                <motion.div className="about__avatar-wrap" variants={fadeUp}>
                    <img src="../assets/react.svg" alt="Avatar" className="about__avatar" />
                </motion.div>
            </div>

            <div className="about__right">
                <motion.h2 variants={fadeUp}>Sobre mí</motion.h2>
                <motion.p variants={fadeUp}>
                    Soy graduada de la tecnicatura universitaria en Programación de la Facultad Tecnológica de Tucumán.
                    Me especializo en el desarrollo web front-end y back-end.
                    Me encanta aprender nuevas tecnologías y mejorar mis habilidades constantemente.
                    Soy una persona proactiva, responsable y con muchas ganas de crecer profesionalmente.
                </motion.p>

                <motion.div className="skills" variants={fadeUp}>
                    <span className="chip">React</span>
                    <span className="chip">JavaScript</span>
                    <span className="chip">CSS</span>
                    <span className="chip">Node</span>
                </motion.div>

                <motion.div className="cta-row" variants={fadeUp}>
                    <a className="about__cta" href="/assets/CV.pdf" target="_blank" rel="noreferrer">Descargar CV</a>
                    <a className="about__cta outline" href="#contact">Contactarme</a>
                </motion.div>
            </div>
        </motion.section>
    );

}

export default About;