import { motion } from "framer-motion";
import { fadeUp } from "../animations";

export default function Hero() {
  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      animate="visible"
    >
      <h1>Hola, soy María Paz</h1>
      <p>Estudiante de Tecnicatura en Programación – UTN</p>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        Ver proyectos
      </motion.button>
    </motion.section>
  );
}
