
import Detail from "./Components/Details/detail";
import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Banner from "./Components/Banner/Banner";
import Navbar from "./Components/Navbar/Navbar";
import { useEffect } from "react";
 
function App() {
  const start1 = "M 0 100 V 50 Q 50 0 100 50 V 100 z"
    const end1 = "M 0 100 V 0 Q 50 0 100 0 V 100 z"
  
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  

  return (
   <div className="container">
     <Navbar/>
<Banner/>
    <Detail/>
</div>
  )
}

export default App
