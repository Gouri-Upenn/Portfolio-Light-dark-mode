import React from 'react'
import './intro.css'

const Intro = ({ isDarkTheme }) => {
    return (
        <section id="intro">
            <span className='text'> <span class='hello'>Hello, </span><br/>I'm
                <span className='name'> Name
                </span>
                <span className='additionalText'>(Pronounciation)</span>

                <br />
            </span>
            <p className='introductionText'>
                I am a Mechanical Engineer turned Data Science enthusiast,
                recently graduated from <span class="highlightedWord">University of Pennsylvania </span>
                with a Master’s in Computer and Information Technology.Throughout the program,
                I acquired cutting-edge skills in machine learning, Data science and AI
                and excelled in various academic projects.
            </p>
            <p className='additionalText'>
            <br />
            <br />
            Feel free to explore my GitHub and LinkedIn profiles to learn more about my work and professional journey.
            </p>
        </section>
    )
}

export default Intro;