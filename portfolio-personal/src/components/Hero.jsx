import { motion, useInView, useAnimation, useScroll, useTransform } from "framer-motion";
import { fadeUpItem } from "../animations";
import React, {useRef, useEffect} from "react";


const container ={
  hidden: { opacity: 0, y: 30},
  visible: { opacity:1, y: 0, transition: {when:"beforeChildren", staggerChildren: 0.08}}
};

const item ={ hidden :{ opacity: 0, y: 10}, visible :{ opacity: 1, y: 0}}

function Hero (){
  const ref = useRef(null);
  const inView= useInView(ref, {once: true});
  const controls = useAnimation();
  const {scrollY}= useScroll();
  const parallaxY = useTransform(scrollY, [0, 400], [0, -40]);

  useEffect(()=>{ if (inView) controls.start("visible");}, [inView, controls])

    return (
      <motion.section ref={ref} className="hero1" style={{ y: parallaxY }} variants={container} initial="hidden" animate={controls}>
      <motion.h1 variants={item}>Hola, soy Pilar Nadal</motion.h1>
      <motion.p variants={item}>Desarrollo Frontend · Diseño  UX/UI·</motion.p>
     
      <motion.img src="/profile.png" alt="" className="hero-image" animate={{ y: [0, -10, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} />
    </motion.section>
    );
}

export default Hero;
