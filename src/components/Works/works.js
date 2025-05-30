import React from 'react';
import './works.css';
import { FaArrowRight } from 'react-icons/fa';

const Works = () => {
    return (
        <section id='works'>
            <h2 className="worksTitle">My Projects</h2>
            <span className="worksDesc">
                A showcase of my MERN stack and data-driven applications developed through academic and internship experiences.
            </span>

            {/* Project 1: EVENTX */}
            <div className="projectContainer">
                <div className="projectDetails">
                    <h3>EVENTX - Event Management System</h3>
                    <p>
                        EVENTX is a MERN stack-based web app that enables event creation, user registration,
                        and admin-level controls for efficient event management. Built with authentication, dynamic dashboards, and responsive design.
                    </p>
                    <a
                        href="https://github.com/sharjitha"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="projectLink"
                    >
                        <FaArrowRight size={24} />
                    </a>
                </div>
            </div>

            {/* Project 2: StockScope */}
            <div className="projectContainer">
                <div className="projectDetails">
                    <h3>StockScope - Buy/Sell Signal Generator</h3>
                    <p>
                        A full-stack web application developed as a college project using React for the frontend and Flask for the backend.
It analyzes stock trends by integrating multiple datasets and applying technical indicators (like RSI), fundamental metrics (such as P/E ratio and EPS from yfinance), and sentiment analysis using the VADER NLP tool on financial news and social media content.
The system generates real-time buy/sell signals to support informed trading decisions through a clean, responsive interface
                    </p>
                    <a
                        href="https://github.com/sharjitha"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="projectLink"
                    >
                        <FaArrowRight size={24} />
                    </a>
                </div>
            </div>

            {/* Project 3: Smart India Hackathon */}
            <div className="projectContainer">
                <div className="projectDetails">
                    <h3>Smart India Hackathon – Local Product Marketplace</h3>
                    <p>
                        Developed a tourism-oriented platform that enables tourists to discover and buy unique local products from specific destinations—
                        such as Aranmula Mirror, Thazhampoo Kumkumam, and Tailmirror. The project aims to promote local artisans and
                        enhance the cultural shopping experience during travel.
                    </p>
                    <a
                        href="https://github.com/sharjitha"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="projectLink"
                    >
                        <FaArrowRight size={24} />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Works;
