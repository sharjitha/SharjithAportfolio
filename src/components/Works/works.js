import React from 'react';
import './works.css';
import { FaArrowRight } from 'react-icons/fa';

const Works = () => {
  return (
    <section id="works">
      <h2 className="worksTitle">My Projects</h2>
      <p className="worksDesc">
        A showcase of full-stack and data-driven applications built during academic projects and internships.
      </p>

      {/* Project 1: EVENTX */}
      <div className="projectContainer">
        <h3>EVENTX – Event Management System</h3>
        <p>
          A MERN stack web app that enables event creation, user registration, and admin-level control.
          Features include login authentication, event dashboards, and real-time updates.
        </p>
        <a
          href="https://github.com/sharjitha"
          target="_blank"
          rel="noopener noreferrer"
          className="projectLink"
        >
          View Project <FaArrowRight />
        </a>
      </div>

      {/* Project 2: StockScope */}
      <div className="projectContainer">
        <h3>StockScope – Buy/Sell Signal Generator</h3>
        <p>
          Built using React and Flask, this tool analyzes stock trends using technical indicators (e.g., RSI), 
          financial data via yfinance, and sentiment analysis using VADER. It delivers real-time trading insights 
          through a clean dashboard.
        </p>
        <a
          href="https://github.com/sharjitha"
          target="_blank"
          rel="noopener noreferrer"
          className="projectLink"
        >
          View Project <FaArrowRight />
        </a>
      </div>

      {/* Project 3: Smart India Hackathon */}
      <div className="projectContainer">
        <h3>Smart India Hackathon – Local Product Marketplace</h3>
        <p>
          A tourism-focused platform allowing travelers to discover and buy authentic local goods such as 
          Aranmula Mirrors and Tailmirror. Built to support regional artisans and elevate cultural experiences.
        </p>
        <a
          href="https://github.com/sharjitha"
          target="_blank"
          rel="noopener noreferrer"
          className="projectLink"
        >
          View Project <FaArrowRight />
        </a>
      </div>
    </section>
  );
};

export default Works;
