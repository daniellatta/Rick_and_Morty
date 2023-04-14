import { useState } from "react";
import style from "./About.module.css";

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={style.container}>
      <div
        className={`${style.card} ${isExpanded ? style.expanded : ""}`}
        onClick={handleClick}
      >
        <div className={style.header}>Haz click aquí!</div>
        {isExpanded && (
          <div className={style.content}>
            <h3>Hola soy Daniel</h3>
            <p>Contenido de la tarjeta</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default About;
