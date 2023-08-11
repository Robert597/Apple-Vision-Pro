import Detail from "./Components/Details/detail";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Banner from "./Components/Banner/Banner";

function App() {
  gsap.registerPlugin(ScrollTrigger);

  return (
   <div className="container">
   <Banner/>
   <Detail/>
   </div>
  )
}

export default App
