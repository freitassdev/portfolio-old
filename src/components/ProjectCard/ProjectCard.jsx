import React, { useState } from "react";
import './ProjectCard.css';
const ProjectCard = () => {

    return (
        <div className="project-card">
            <div className="project-card-image">
                <div className="image-container">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXTb14H0pL8piAfDyR1f5Ua-m14lva9t9POQ&usqp=CAU" alt="image" />
                </div>
            </div>
            <div className="project-card-title">
                <h2 className="poppins font-bold">Em breve.</h2>
                <div className="header-line"></div>
                <i className="pi pi-github" style={{ color: "var(--primary-color)", fontSize: '1.3rem' }}></i>
                <i className="pi pi-link" style={{ color: "var(--primary-color)", fontSize: '1.3rem' }}></i>
            </div>
            <div className="bold project-card-tech">
                <p>HTML5 - CSS3 - JavaScript</p>
            </div>
            <div className="project-card-description">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quaerat voluptates Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, laborum tempore mollitia pariatur cum iure delectus necessitatibus</p>
            </div>
        </div>

    );
};

export default ProjectCard;