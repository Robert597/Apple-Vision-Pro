import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "./Components/Navbar/Navbar";
import { useEffect, useRef } from "react";
import Footer from "./Components/Footer/Footer";
import {Route, Routes, useLocation} from "react-router-dom";
import Home from "./Pages/Home";
import {AnimatePresence} from 'framer-motion';



 
function App() {
  const containerRef = useRef(null);
  const start1 = "M 0 100 V 50 Q 50 0 100 50 V 100 z"
    const end1 = "M 0 100 V 0 Q 50 0 100 0 V 100 z"
 gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  const location = useLocation();

  return (
 
   <div className="App">
     <Navbar/>
     <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home/>} />
        <Route path="/design" element={<div>Welcome</div>} />
        <Route path="/technology" element={<Home/>} />
        <Route path="/security" element={<Home/>} />
      </Routes>
      </AnimatePresence>
    <Footer/>
</div>
  )
}

export default App
