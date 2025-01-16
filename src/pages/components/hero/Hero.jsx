import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.jpg'
import { Link } from "react-router-dom"

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>Welcome to the Manifesto Summarisation Project</h1>
        <p>
        This website is for anyone to use. 
        The project aims to create a more readable and understandable manifesto using NLP models. 
        If you have any problems using the website, visit the "About Us" section where you can find frequently asked questions. 
        Otherwise scroll down on this page to find a basic guide on how to use the summarisation page.
        </p>
        <Link to="/About" className='btn'>FAQs <img src={dark_arrow} alt='' /></Link>
      </div>
    </div>
  )
}

export default Hero
