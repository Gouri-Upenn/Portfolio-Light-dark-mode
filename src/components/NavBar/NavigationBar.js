import React from 'react'
import { Link } from "react-router-dom";

import './navigationBar.css';
import logoDark from '../../assets/logodark.png'
import logoLight from '../../assets/logolight.png'
import sun from '../../assets/sunIcon.png'
import moon from '../../assets/moon.png'

function NavigationBar  ({ isDarkTheme, toggleTheme })  {
  return (
    <nav className="navigationBar">
      <img src={isDarkTheme? logoDark:logoLight} alt='Logo' className='Logo' />
      <div className='desktopMenu'>
        <Link to="/" className="desktopMenuListItem">HOME</Link>
        <Link to="/projects" className="desktopMenuListItem">MY PROJECTS</Link>
        <Link className="desktopMenuListItem">RÉSUMÉ</Link>
      </div>
      <button onClick={toggleTheme} className="theme-toggle-btn">
        {/* Switch between sun and moon icons based on the current theme */}
        <img src={isDarkTheme ? moon : sun} className="theme-icon" alt="Toggle Theme" />
      </button>
    </nav >
  )
}

export default NavigationBar;
