import {motion} from 'framer-motion';


function Contact (){
    return (
        <motion.section
        id="contact"
        initial={{ opacity:0, y: 30}}
        whileInView={{ opacity: 1, y: 0}}
        transition={{ duration: 0.6, ease: "easeOut"}}
        viewport={{once: true}}
        className="contact-section"
        >

            <h2>Contactame!</h2>
            <p className='contact-text
            '>
                ¿Tenes una idea, proyecto o simplemente queres charlar?
                Estoy abierta a nuevas oportunidades y colaboraciones.

            </p>
            <ul className="contact-list">
        <li>
          {" "}
          <a href="mailto:nadaalpilarr@gmail.com">
            nadaalpilarr@gmail.com
          </a>
        </li>

        <li>
          {" "}
          <a
            href="https://github.com/pilitazzz793"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/pilitazzz793
          </a>
        </li>
      </ul>
        </motion.section>
    );
}
export default Contact;