import { useEffect } from "react";
import Vision from "/vision pro 2/apple_vision_main2.png";
import "../../Styles/banner.scss";
import {gsap} from 'gsap';
import Navbar from "../Navbar/Navbar";

import Loader from "../Loader/Loader";
const Banner = () => {
  let tl2 = gsap.timeline({
    paused: true
  });
  useEffect(() => {
    gsap.set("body", {overflowY: "hidden"});
    gsap.set(".banner-image-container", {
      y: "-50%",
      scale: 0.8
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
})
   .to(".banner-image-container",{
    y: "-25%",
    scale: 1,
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
  })
  .to(".NavbarContainer", {
    y: 0,
    duration: 1,
    ease: "slow (0.7, 0.7, false)"
  }).set("body", {overflowY: "visible"});

  /*
  let percent = 1;
    let elementP = document.getElementById("percent");
  
 

   let id = setInterval(frame, 10);

   function frame(){
    if(percent >= 100){
      clearInterval(id);
      tl2.play();
    }else{
      percent++;
elementP.style.left = `${percent}%`
elementP.innerHTML = percent + "%";
    } 
   }
   */
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
          {/*
        <div className="Loading">
          <div className="divider"></div>
          <div className="marquee marquee1">
            <span>APPLE VISION PRO <img src={Gif1} alt="vision pro"/> APPLE VISION PRO <img src={Gif2} alt="vision pro"/> APPLE VISION PRO <img src={Gif3} alt="vision pro"/> APPLE VISION PRO <img src={Gif4} alt="vision pro"/></span>
            <span>APPLE VISION PRO <img src={Gif1} alt="vision pro"/> APPLE VISION PRO <img src={Gif2} alt="vision pro"/> APPLE VISION PRO <img src={Gif3} alt="vision pro"/> APPLE VISION PRO <img src={Gif4} alt="vision pro"/></span>
          </div>
          <div className="divider"></div>
          <div className="marquee marquee2">
            <span>LOADING <img src={Gif5} alt="vision pro"/> LOADING <img src={Gif4} alt="vision pro"/> LOADING <img src={Gif6} alt="vision pro"/> LOADING <img src={Gif2} alt="vision pro"/> LOADING <img src={Gif4} alt="vision pro"/></span>
            <span>LOADING <img src={Gif3} alt="vision pro"/> LOADING <img src={Gif4} alt="vision pro"/> LOADING <img src={Gif2} alt="vision pro"/> LOADING <img src={Gif2} alt="vision pro"/> LOADING <img src={Gif5} alt="vision pro"/></span>
          </div>
          <div className="divider"></div>
          <div id="percent">1%</div>
        </div>
    
        <div className="banner-content">
          <h6 className="banner-content-title">Introducing</h6>
          <p className="banner-content-content">You&apos;ve never seen everything like this before.</p>
        </div>
        <div className="banner-buttons">
          <button className="banner-button">
            Watch the film <FiPlayCircle className="banner-button-icon"/>
          </button>
          <button className="banner-button">
            Watch the event <FiArrowRight className="banner-button-icon"/>
          </button>
        </div>
  */}

    </div>
    </div>
  )
}

export default Banner;