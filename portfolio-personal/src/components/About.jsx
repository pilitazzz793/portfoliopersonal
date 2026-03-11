import React  from "react";
import './Style.css';
import {DiHtml5, DiCss3, DiJavascript1, DiReact, DiNodejsSmall, DiMongodb, DiGit, DiGithubBadge} from "react-icons/di";
import { SiExpress, SiPostgresql, SiMysql} from "react-icons/si";
import { setDragLock } from "framer-motion";

const About = () =>{
  
  const stack =[
    {name: 'HTML', icon: <DiHtml5 size={40} color="#E44D26"/>},
    {name: 'CSS', icon: <DiCss3 size={40} color="#1572B6"/>},
    {name: 'JavaScript', icon: <DiJavascript1 size={40} color="#F0DB4F"/>},
    {name: 'React', icon: <DiReact size={40} color="#61DAFB"/>},
    {name: 'Node.js', icon: <DiNodejsSmall size={40} color="#339933"/>},
    {name: 'Express', icon: <SiExpress size={40} color="#000000"/>},
    {name: 'MongoDB', icon: <DiMongodb size={40} color="#47A248"/>},
    {name: 'PostgreSQL', icon: <SiPostgresql size={40} color="#336791"/>},
    {name: 'MySQL', icon: <SiMysql size={40} color="#00758F"/>},
    {name: 'Git', icon: <DiGit size={40} color="#F05032"/>},
    {name: 'GitHub', icon: <DiGithubBadge size={40} color="#24292E"/>}
  ];

  return(
    <section className="about-section">
      <div className="about-container">

        <div className="about-info">
          <h2>Sobre mí</h2>
          <p>Soy estudiante de la Tecnicatura universitaria en Programacion de la Facultad Tecnológica de Tucumán. 
            Me especializo en el desarrollo web front-end y back-end. Me encanta aprender nuevas tecnologías 
            y mejorar mis habilidades constantemente. Soy una persona proactiva, responsable y con muchas ganas de crecer profesionalmente.
            </p>
        </div>

        <div className="about-stack-container">
          <h2>Mi Stack Tecnológico</h2>
          <div className="stack-grid">
            {stack.map((tech, index) =>(
              <div key={index} className="tech-card" title={tech.name}>
                {tech.icon}
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
 
  );
}

export default About;
