import { useEffect } from "react";
import Vision from "/vision pro 2/apple_vision_main2.png";
import "../../Styles/banner.scss";
import {gsap} from 'gsap';
import { FiArrowUpRight} from "react-icons/fi";
const Banner = () => {
 
 
return (
    <div className="banner">
    <div className='bannerContainer'>
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