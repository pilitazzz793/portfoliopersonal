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
            <h2>Sobre mi</h2>
            <p>
                Soy graduada de la tecnicatura universitaria en programacion de la faculotad tecnologica de Tucuman.
                Me especializo en el desarrollo web front-end  y backend.
                Me encanta aprender nuevas tecnologias y mejorar mis habilidades constantemente.
                Soy una persona proactiva, responsable y con muchas ganas de crecer profesionalmente.
            </p>
        </motion.section>
    );

}

export default About;