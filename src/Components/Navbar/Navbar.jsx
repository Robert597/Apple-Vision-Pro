import React, { useEffect } from 'react';
import Logo from "/vision pro 2/logo.png";

import {Link} from "react-router-dom";

const Navbar = () => {
  
  return (
  
    <div className='NavbarContainer'>
        <div className="NavbarLogo">
            <img src={Logo} alt="apple-Logo"/>
        </div>


        <div id="mobile-btn" >
            <span></span>
        </div>

        <ul className="Navbar-Link-Content">
            <li><Link to="/" data-replace="Home">Home</Link></li>
            <li><Link to="/design" data-replace="Design">Design</Link></li>
            <li><Link to="/technology" data-replace="Technology">Technology</Link></li>
            <li><Link to="/security" data-replace="Security">Security</Link></li>
        </ul>
        <button className='navbarButton'>Notify Me</button>
    </div>
 

  )
}

export default Navbar