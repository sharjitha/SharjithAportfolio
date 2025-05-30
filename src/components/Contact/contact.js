import './contact.css';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import githubIcon from '../../assets/github.png';
import twitterIcon from '../../assets/twitter.png';
import linkedinIcon from '../../assets/linkedin.png';
import instagramIcon from '../../assets/instagram.png';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_v07kger', 'template_pzq5zql', form.current, 'QFo9nBF16Tsel_NLT')
            .then((result) => {
                console.log(result.text);
                e.target.reset();
                alert('Email Sent!');
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div id='contactPage'>
            <div id="clients">
                <h1 className="contactPageTitle">Internship Experience</h1>
                <span className="clientDesc">
                    I’ve gained valuable real-world experience by interning with:
                </span>
                <div className="clientImgs">
                    <img src={require('../../assets/TeMetaTech.jpeg')} alt="TeMetaTech" className="clientImg" />
                    <img src={require('../../assets/ICT_Academy_Kerala.png')} alt="ICT Academy" className="clientImg" />
                </div>
            </div>
            <div id="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactDesc">Let's connect! Fill out the form below to get in touch about opportunities or collaborations.</span>
                <form className="contactForm" ref={form} onSubmit={sendEmail}>
                    <input type="text" className="name" placeholder='Your name' name='from_name' required />
                    <input type="email" className="email" placeholder='Your Email' name='from_email' required />
                    <textarea name="message" placeholder='Your Message' rows={5} className='msg' required></textarea>
                    <button type="submit" value="Send" className='submitBtn'>Submit</button>
                    <div className="links">
                        <a href="https://github.com/sharjitha" target="_blank" rel="noopener noreferrer">
                            <img src={githubIcon} alt="Github" className="link" />
                        </a>
                        <a href="https://x.com/sharjithambadi?s=11" target="_blank" rel="noopener noreferrer">
                            <img src={twitterIcon} alt="Twitter" className="link" />
                        </a>
                        <a href="https://www.linkedin.com/in/sharjith-a-5a4145248/" target="_blank" rel="noopener noreferrer">
                            <img src={linkedinIcon} alt="linkedin" className="link" />
                        </a>
                        <a href="https://www.instagram.com/sharjith_ambadi?igsh=MTdzNDZ6YjNhazRzMg%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
                            <img src={instagramIcon} alt="Instagram" className="link" />
                        </a>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contact;
