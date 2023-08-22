import {gsap} from 'gsap';
import { useEffect } from 'react';
const Loader = ({timeline}) => {
   
    
    useEffect(() => {
        const load = gsap.timeline({
            onComplete: move
        });
        let percent = 0;
        const elementP = document.getElementById("counter");
       
        let id;
        function move(){
            id = setInterval(frame, 10)
        };
        function frame(){
            if(percent >= 100){
              clearInterval(id);
              timeline.play();
            }else{
              percent++;
        elementP.textContent = `${percent}%`;
        elementP.style.transform = `translate(${percent}%)`;
            } 
           }
     load.to([".overlay-text h1 span", ".overlay-info h1 span"], {
        y: 0,
       transform: "skewY(0deg)",
        duration: 1.5,
        stagger: 0.1,
        ease: "power2.inOut"
     }).to("#counter", {
        opacity: 1,
        ease: "power2.inOut",
        duration: 1
     })
    
    }, []);
    
    return (
        <div className="overlay-svg">
        <svg viewBox="0 0 1000 1000" preserveAspectRatio="none">
          <path id="svg" d="M0,1005S175,995,500,995s500,5,500,5V0H0Z"></path>
        </svg>
        <div className="overlay-text">
          <h1> <span>Vision Pro</span></h1>
        </div>
        <div className="overlay-bottom">
        <div className='overlay-info'>
        <h1> <span>Apple's first 3D camera.</span></h1>
        </div>
        <div id="percent1">
            <span id='counter'>0</span>
        </div>
        </div>
        {/*
        <div className="overlay-loader">
            <div className="loader-container">
                <div className="percent" id="percent1">
                    0%
                </div>
                <div className="little-info">
                    <p className="little-info-container">
                        <span className="little-info-text">Apple Vision Pro</span>
                    </p>
                    <p className="little-info-container">
                        <span className="little-info-text">First 3D Camera</span>
                    </p>
                    <p className="little-info-container">
                        <span className="little-info-text">Relive Cherished Moments</span>
                    </p>
                </div>
                <div className="marquee">
                    <span>LOADING... LOADING... LOADING... LOADING... LOADING... LOADING... LOADING... LOADING... LOADING... LOADING... </span>
                </div>
            </div>
        </div>
        
    */}
       </div>
)
}
export default Loader;