
import Detail from "./Components/Details/detail";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Banner from "./Components/Banner/Banner";
import { useEffect } from "react";

function App() {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  

  return (
   <div className="container">
   <Banner/>
   <Detail/>
   </div>
  )
}

export default App
