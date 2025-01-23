import React from 'react'
import './links.css'
import githubWhite from '../../assets/github-mark-white.png'
import LinkedInWhite from '../../assets/lkin-light.png'
import githubDark from '../../assets/github-dark.png'
import LinkedInDark from '../../assets/lkin-dark - Copy.png'

const Links = ({isDarkTheme}) => {
    return (
        <section>
            <div className='links'>
                <a href="https://github.com/Gouri-Upenn" target="_blank" rel="noopener noreferrer">
                    <img src={isDarkTheme?githubWhite:githubDark } alt="GitHub" className='gitHubImage' />
                </a>
                <a href="https://www.linkedin.com/in/gouri-c/" target="_blank" rel="noopener noreferrer">
                    <img src={isDarkTheme?LinkedInWhite:LinkedInDark} alt="LinkedIn" className='LinkedInImage' />
                </a>

            </div>
        </section>
    )
}

export default Links;