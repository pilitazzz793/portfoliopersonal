import {motion} from 'framer-motion';

function Projects (){
    return(
        <section>
            <h2>Proyectos</h2>

            <motion.div
            initial={{opacity:0}}
            whileInView={{opacity: 1}}
            transition={{duration: 0.6}}
            viewport={{once: true}}
            >
                <motion.div
                whileHover={{scale: 1.05}}
                transition={{ duration: 0.3}}
                >
                    <h3>Sistema de productos</h3>
                    <p>CRUD con Node.js y MYSQL</p>
                </motion.div>
            </motion.div>
        </section>
    );
}

export default Projects;