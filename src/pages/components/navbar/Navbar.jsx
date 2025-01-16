import React, { useEffect, useState,  } from 'react'
import './Navbar.css'
import logo from '../../assets/MSPLogoN.png'
import { Link } from "react-router-dom"

const Navbar = () => {

  const [sticky, setSticky] = useState(false);

  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY > 100 ? setSticky(true) : setSticky(false)
    })
  },[]);

  return (
    <nav className={`container ${sticky? 'show-nav': ''}`}>
        <img src={logo} alt="" className='logo'/>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Summaries">Manifesto Summaries</Link></li>
            <li><Link to="/About" className='btn'>About Us</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar
