import {motion} from 'framer-motion';
import {fadeUp} from '../animations';

function Hero (){
    return (
        <motion.section
        variants={fadeUp}
        initial='hidden'
        animate='visible'
        >

            <h1>Bienvenido, soy Maria Paz</h1>
            <p>Graduada de la facultad tecnológica de San Miguel de Tucuman- UTN</p>

            <motion.button
            whileHover={{ scale: 1.1}}
            whileTap={{scale: 0.95}}
            >
                Ver proyectos
            </motion.button>
        </motion.section>
    );
}

export default Hero;