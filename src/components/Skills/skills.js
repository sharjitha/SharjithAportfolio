import React from 'react';
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';

const Skills = () => {
  return (
    <section id="skills">
      <h2 className="skillTitle">What I Do</h2>
      <p className="skillDesc">
        I'm a passionate full-stack developer with hands-on experience in building dynamic web applications using the MERN stack.
        I’ve also worked with Adobe Experience Manager and analytics tools during internships. With a strong foundation in
        programming and problem-solving, I strive to create clean, efficient, and user-friendly solutions.
      </p>

      <div className="skillCards">
        <div className="skillCard">
          <img src={UIDesign} alt="UI/UX Design" />
          <h3>UI/UX Design</h3>
          <p>
            Experience in crafting intuitive and user-friendly interfaces through MERN-based applications and project work.
          </p>
        </div>
        <div className="skillCard">
          <img src={WebDesign} alt="Web Development" />
          <h3>Web Development</h3>
          <p>
            Skilled in full-stack development using MongoDB, Express.js, React.js, and Node.js. Built an event management system with user/admin roles.
          </p>
        </div>
        <div className="skillCard">
          <img src={AppDesign} alt="Stock Analysis App" />
          <h3>Stock Analysis App</h3>
          <p>
            Developed a web app generating buy/sell signals using technical, fundamental, and alternative data analytics.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
