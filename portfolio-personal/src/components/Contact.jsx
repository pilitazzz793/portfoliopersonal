import {motion} from 'framer-motion';

function Contact (){
    return(
        <motion.section
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration: 0.6}}
        viewport={{once: true}}
        >

            <h2>Contactame!</h2>
            <p>¿Tienes alguna pregunta o proyecto en mente? ¡No dudes en contactarme!</p>
            <p>Email: nadaalpilarr@gmail.com</p>
            <p>GitHub: github.com/pilitazzz793</p>
        </motion.section>
    );

}

export default Contact;