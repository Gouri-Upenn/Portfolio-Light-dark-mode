import React from 'react'
import './projects.css'
import project1 from '../../assets/Project1.png'

function Projects({ isDarkTheme, toggleTheme }) {
    return (
        <section id="allProjects">
            <h1 className='heading'> My Projects   </h1>
            <span className='description'>Hi, check out my recent projects</span>
            <div className='images'>
                <img src={project1} className="theme-icon" alt="Toggle Theme" />

            </div>
        </section>
    )
}

export default Projects;