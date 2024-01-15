import React, {useEffect} from 'react';
import Detail from "../Components/Details/detail";
import Banner from "../Components/Banner/Banner";
import About from "../Components/About/About";
import Design from "../Components/Sections/Design";
import Technology from "../Components/Sections/Technology";
import Security from "../Components/Sections/Security";
import {motion} from "framer-motion";
import gsap from 'gsap';
const Home = ({tl2, startAnim}) => {
  const curve = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
  const flat = "M0 2S175 1 500 1s500 1 500 1V0H0Z";
  useEffect(() => {
    //  gsap.set("body", {overflowY: "hidden"});


      gsap.set(".banner-image-container", {
        y: (window.innerWidth <= 1000 ?"-20%" : "-50%"),
        scale: (window.innerWidth <= 1000 ? 1.2 : 0.8)
       });
     if(startAnim){
      tl2.to(".banner-image-container",{
        y: (window.innerWidth <= 1000 ? "-15%" : "-25%"),
        scale: (window.innerWidth <= 1000 ? 1.4 : 1),
        ease: "back.out(2)",
        duration: 2
       }).to(".inline-banner-title", {
        y: 0,
        transform: "skewY(0deg)",
        ease: "back.out(1.7)",
        duration: 2
      }, "<5%")
    .set(".banner-buttons", {
        visibility: "visible"
      }, "<60%").to([".banner-content-title span", ".banner-content-up"],  {
        y: 0,
        transform: "skewY(0deg)",
        ease: "back.out(1.5)",
        duration: (window.innerWidth <= 1000 ? 1 : 0),
        stagger: .3
      }, "<40%").to(".iconContainer", {
        right: 0,
        rotate: 0,
        duration: (window.innerWidth <= 1000 ? 2 : 0),
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
     }else{
  tl2.to([".overlay-text h1 span", ".overlay-info h1 span"], {
    y: "-150%",
    duration: 1.5,
    stagger: 0.1,
    ease: "power2.inOut"
  }).to("#counter", {
    opacity: 0,
    ease: "power2.inOut",
    duration: 1
  }, "<").set(".overlay-svg", {
    backgroundColor: "transparent"
  })
  .to("#svg", {
    duration: 0.9,
    attr: {
      d: curve
    },
    ease: "Power2.easeIn"
  }).to("#svg", {
    duration: 0.9,
    attr: {
      d: flat
    },
    ease: "Power2.easeIn"
  }).to(".overlay-svg", {
    zIndex: -1,
    display: "none"
  })
  .to(".banner-image-container",{
      y: (window.innerWidth <= 1000 ? "-15%" : "-25%"),
      scale: (window.innerWidth <= 1000 ? 1.4 : 1),
      ease: "back.out(2)",
      duration: 2
     }).to(".inline-banner-title", {
      y: 0,
      transform: "skewY(0deg)",
      ease: "back.out(1.7)",
      duration: 2
    }, "<5%")
  .set(".banner-buttons", {
      visibility: "visible"
    }, "<60%").to([".banner-content-title span", ".banner-content-up"],  {
      y: 0,
      transform: "skewY(0deg)",
      ease: "back.out(1.5)",
      duration: (window.innerWidth <= 1000 ? 1 : 0),
      stagger: .3
    }, "<40%").to(".iconContainer", {
      right: 0,
      rotate: 0,
      duration: (window.innerWidth <= 1000 ? 2 : 0),
      ease: "back.out(0.8)"
    }).to(" .banner-button-text", {
      opacity: 1,
      duration: .5
    }, "<15%")
    .to(".NavbarContainer", {
      y: 0,
      duration: 1,
      ease: "slow (0.7, 0.7, false)"
    }).set("body", {overflowY: "visible"});}
   }, []);
  return (
    <motion.div className='Home'
    exit={{x: -window.innerWidth, opacity:0, transition: {duration: 1}}}>
    <Banner tl2={tl2}/>
    <Detail/>
    <About/>
    <Design/>
    <Technology/>
    <Security/>
    </motion.div>
  )
}

export default Home