import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "./Components/Navbar/Navbar";
import { useEffect, useRef, useState } from "react";
import Footer from "./Components/Footer/Footer";
import {Route, Routes, useLocation} from "react-router-dom";
import Home from "./Pages/Home";
import {AnimatePresence} from 'framer-motion';
import Loader from './Components/Loader/Loader';
import Details from "./Pages/Details";
import { security, technology, design } from "./utils";
import MobileNav from "./Components/Navbar/Mobile-Nav";


 
function App() {
  const containerRef = useRef(null);
 
  const [startAnim, setStartAnim] = useState(false);
 gsap.registerPlugin(ScrollTrigger);
  
  const location = useLocation();
  let tl2 = gsap.timeline({
    paused: startAnim ? false : true
  });

  const [openNav, closeNav] = useState(false);
  useEffect(() => {
    const navBtn = document.getElementById("mobile-btn");
    const navLink = document.getElementsByClassName("nav-link");
 
    const tlOpener = gsap.timeline({paused: true});
    const animateOpenNav = () => {
        tlOpener.set(".mobile-nav-container", {
            display: "block",
        }).to(".nav-link > a", {
            duration: 0.8,
            top: 0,
            ease: "power2.inOut",
            stagger: {
                amount: 0.1
            }
        }).from(".menu-footer", {
            duration: 0.3,
            opacity: 0
        }, "-=0.5").reverse();
       }
   const openNav = () => {
    animateOpenNav();

    navBtn.onclick = function (e){
        navBtn.classList.toggle("active");
        tlOpener.reversed(!tlOpener.reversed());
    };
   
   }
    
   openNav();

  
 

}, [])
return (
 
   <div className="App">
    <Loader timeline={tl2} setStartAnim={setStartAnim}/>
     <Navbar/>
     <MobileNav/>
     <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home tl2={tl2} startAnim={startAnim}/>} />
        <Route path="/design" element={<Details selected={design} title={"Design"}/>} />
        <Route path="/technology" element={<Details selected={technology} title={"Technology"}/>} />
        <Route path="/security" element={<Details selected={security} title={"Security"}/>} />
      </Routes>
      </AnimatePresence>
    <Footer/>
</div>
  )
}

export default App
