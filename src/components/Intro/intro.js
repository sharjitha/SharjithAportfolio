import React from 'react';
import './intro.css';
import btnImg from '../../assets/hireme.png';
import { Link } from 'react-scroll';

const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">
                    I'm <span className="introName">Sharjith A</span> <br />Full-Stack Developer
                </span>
                <p className="introPara">
                    Final-year Computer Science & Engineering student skilled in MERN stack development.<br />
                    Passionate about building dynamic applications and solving real-world problems through code.
                </p>
                <Link to="contact" smooth={true} duration={500}>
                    <button className="btn">
                        <img src={btnImg} alt="Hire" className='btnImg' /> Hire Me
                    </button>
                </Link>
            </div>
            
        </section>
    );
}

export default Intro;
