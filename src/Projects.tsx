import React from 'react';
import './Projects.css';

const Projects: React.FC = () => {
    return (
        <section id="projects" className="section projects-section">
            <h2>Projects</h2>
            <div className="project">
                <h3>Project 1</h3>
                <p>Description of Project 1</p>
            </div>
            <div className="project">
                <h3>Project 2</h3>
                <p>Description of Project 2</p>
            </div>
        </section>
    );
};

export default Projects;