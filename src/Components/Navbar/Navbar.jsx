import React, { useEffect } from 'react';
import MobileNav from "./Mobile-Nav";
import Logo from "/vision pro 2/logo.png";
import {gsap} from 'gsap';
import CSSRulePlugin from 'gsap/CSSRulePlugin';
import {Link} from "react-router-dom";

const Navbar = () => {
  useEffect(() => {
    const hamburgerr = document.getElementById("mobile-btn");
  
    const tl = gsap.timeline({paused: true});
  
    let spanBefore = CSSRulePlugin.getRule("#hamburger span:before");
    
   
    gsap.set(".menu", {display: "none"});
    gsap.set(".nav-svg", {display: "none"});
    
    
    const revealMenuItems = () => {
        const start = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
        const end = "M0 2S175 1 500 1s500 1 500 1V0H0Z";
    
        const power2 = "power2.inOut";
        const power4 = "power4.inOut";
    
      tl.set(".nav-svg", {
        display: "block"
    }, "-=1").set(".menu", {
        display: "block" 


    }, "-=1")
    .to("#svg1", {
        duration: 0.5,
        attr: {
          d: start
        },
        ease: "Power2.easeIn"
      }).to("#svg1", {
        duration: 0.5,
        attr: {
          d: end
        },
        ease: "Power2.easeIn"
      }).to(".nav-svg", {
        zIndex: -1,
        display: "none"
      }).to(
        ".menu-link", {
            y: 0,
transform: "skewY(0deg)",
duration: 1,
stagger: .3, 
ease: "power3.inOut"
        }
      ).to([".menu-footer p", ".mobile-Button"], {
        opacity: 1,
        stagger: .3,
        ease: "power3.inOut",
        duration: 1
      }).reverse();
    
    }
    //toggle menu
    const revealMenu = () => {
        revealMenuItems();
      
    
        hamburgerr.onclick = () => {
            hamburgerr.classList.toggle("active");
            tl.reversed(!tl.reversed());
        }
    
    }
    revealMenu();

}, [])
  return (
    <div className="navv">
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
    <MobileNav/>
    </div>
  )
}

export default Navbar