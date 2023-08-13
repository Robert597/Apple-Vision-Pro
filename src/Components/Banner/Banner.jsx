import { useEffect } from "react";
import Vision from "/vision pro 2/apple_vision_main2.png";
import "../../Styles/banner.scss";
import {gsap} from 'gsap';
import { FiArrowUpRight} from "react-icons/fi";
import Navbar from "../Navbar/Navbar";

import Loader from "../Loader/Loader";
const Banner = () => {
  let tl2 = gsap.timeline({
    paused: true
  });
  useEffect(() => {
  //  gsap.set("body", {overflowY: "hidden"});
    gsap.set(".banner-image-container", {
      y: (window.innerWidth <= 1000 ?"-20%" : "-50%"),
      scale: (window.innerWidth <= 1000 ? 1.2 : 0.8)
     });
   
tl2.to(".percent", {
  opacity: 0,
  duration: .5,
  ease: "power3.inOut"
})
.to(".little-info-text", {
  y: "100%",
  stagger: .3,
  duration: .5,
  ease: "slow (0.7, 0.7, false)"
}, "<").set(".marquee", {
  overflow: "hidden"
}, "<").to(".marquee span", {
  y: "100%",
  stagger: .3,
  duration: .5,
  ease: "slow (0.7, 0.7, false)"
}, "<").to(".overlay-loader", {
  height: 0,
  duration: 1,
  ease: "power3.inOut"
}).to(".banner-image-container",{
    y: (window.innerWidth <= 1000 ? "-5%" : "-25%"),
    scale: (window.innerWidth <= 1000 ? 1.4 : 1),
    ease: "back.out(1.7)",
    duration: 2
   }).to(".inline-banner-title", {
    y: 0,
    transform: "skewY(0deg)",
    ease: "back.out(1.7)",
    duration: 2
  }, "<15%")
.to(".overlay", {
    minHeight: "100vh",
    ease: "power3.inOut",
    duration: 1
  }).set(".banner-buttons", {
    visibility: "visible"
  }, "<30%").to(".banner-content-title span",  {
    y: 0,
    transform: "skewY(0deg)",
    ease: "back.out(1.5)",
    duration: 0.5
  }, "<40%").to(".banner-content-up", {
    y: 0,
    transform: "skewY(0deg)",
    ease: "back.out(1.5)",
    duration: 0.5
  },"<20%").to(".iconContainer", {
    right: 0,
    rotate: 0,
    duration: 2,
    ease: "back.out(0.8)"
  }).to(" .banner-button-text", {
    opacity: 1,
    duration: .5
  }, "<15%")
  .to(".NavbarContainer", {
    y: 0,
    duration: 1,
    ease: "slow (0.7, 0.7, false)"
  }).set("body", {overflowY: "visible"});
  


  }, []);


  
  
  return (
    <div className="banner">
      <Loader timeline={tl2}/>
    <div className="overlay"></div>
    <div className='bannerContainer'>
      <Navbar/>
      
        <div className="banner-Title-Container">
            <h1 className="banner-title">
              <span className="inline-banner-title">VISION PRO</span>
            </h1>
        </div>
        <div className="banner-image-container">
            <img src={Vision} alt="vision pro graphics"/>
        </div>
         
        
    
        <div className="banner-content">
          <h6 className="banner-content-title"><span>Introducing</span></h6>
          <p className="banner-content-content"><span className="banner-content-up">You&apos;ve never seen everything like this before.</span></p>
        </div>
        <div className="banner-buttons">
          <button className="banner-button">
            <span className="banner-button-text">Learn about design </span>
            <span className="iconContainer"><FiArrowUpRight className="banner-button-icon"/></span>
          </button>
          <button className="banner-button">
          <span className="banner-button-text">Learn about technology </span> <span className="iconContainer"><FiArrowUpRight className="banner-button-icon"/></span>
          </button>
        </div>
  

    </div>
    </div>
  )
}

export default Banner;