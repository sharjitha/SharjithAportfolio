import React from 'react';
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';

const Skills = () => {
    return (
        <section id='skills'>
            <span className="skillTitle">What I do</span>
            <span className="skillDesc">
                I'm a passionate full-stack developer with hands-on experience in building dynamic web applications using the MERN stack.
                I’ve also worked with Adobe Experience Manager and analytics tools during my internships. With a strong foundation in
                programming and problem-solving, I strive to create clean, efficient, and user-friendly solutions.
            </span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>UI/UX Design</h2>
                        <p>Experience in crafting intuitive and user-friendly interfaces through MERN-based applications and project work.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Web Development</h2>
                        <p>Skilled in full-stack development using MongoDB, Express.js, React.js, and Node.js. Built an event management system with user/admin roles.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Stock Analysis App</h2>
                        <p>Developed a web app generating buy/sell signals using technical, fundamental, and alternative data analytics.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;
