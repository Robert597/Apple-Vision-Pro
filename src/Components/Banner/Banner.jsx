import { useEffect } from "react";
import Vision from "../../Assets/vision pro 2/apple_vision_main2.png";
import "../../Styles/banner.scss";
import {gsap} from 'gsap';
import Navbar from "../Navbar/Navbar";
import Gif1 from "../../Assets/vision pro 2/gif1.gif";
import Gif2 from "../../Assets/vision pro 2/gif2.gif";
import Gif3 from "../../Assets/vision pro 2/gif3.gif";
import Gif4 from "../../Assets/vision pro 2/gif4.gif";
import Gif5 from "../../Assets/vision pro 2/gif5.gif";
const Banner = () => {
  let tl2 = gsap.timeline({
    paused: true
  });
  useEffect(() => {
    gsap.set("body", {overflow: "hidden"});
    gsap.set(".banner-image-container", {
      y: "-75%",
      scale: 0.5
     });
   
  tl2.set(".Loading", {display: "none"})
   tl2.to(".banner-image-container",{
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
  })
  }, []);

  useEffect(() => {
 
   let percent = 1;
    let elementP = document.getElementById("percent");
  const id = setInterval(frame, 10);

   function frame(){
    if(percent >= 100){
      clearInterval(id);
      tl2.play();
    }else if(percent < 40){
      percent++;
elementP.style.left = `${percent}%`
elementP.innerHTML = percent + "%";
    } else {
      percent++;
elementP.style.left = `${percent -10}%`
elementP.innerHTML = percent + "%";
    }
   }

   return () => clearInterval(id);
  }, [])
  
  
  return (
    <div className="banner">
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
        <div className="Loading">
          <div className="divider"></div>
          <div className="marquee marquee1">
            <span>APPLE VISION PRO <img src={Gif1} alt="vision pro"/> APPLE VISION PRO <img src={Gif2} alt="vision pro"/> APPLE VISION PRO <img src={Gif3} alt="vision pro"/> APPLE VISION PRO <img src={Gif4} alt="vision pro"/></span>
            <span>APPLE VISION PRO <img src={Gif1} alt="vision pro"/> APPLE VISION PRO <img src={Gif2} alt="vision pro"/> APPLE VISION PRO <img src={Gif3} alt="vision pro"/> APPLE VISION PRO <img src={Gif4} alt="vision pro"/></span>
          </div>
          <div className="divider"></div>
          <div className="marquee marquee2">
            <span>LOADING <img src={Gif5} alt="vision pro"/> LOADING <img src={Gif4} alt="vision pro"/> LOADING <img src={Gif3} alt="vision pro"/> LOADING <img src={Gif2} alt="vision pro"/> LOADING <img src={Gif5} alt="vision pro"/></span>
            <span>LOADING <img src={Gif5} alt="vision pro"/> LOADING <img src={Gif4} alt="vision pro"/> LOADING <img src={Gif3} alt="vision pro"/> LOADING <img src={Gif2} alt="vision pro"/> LOADING <img src={Gif5} alt="vision pro"/></span>
          </div>
          <div className="divider"></div>
          <div id="percent">1%</div>
        </div>
      {/*
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