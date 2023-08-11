import {gsap} from 'gsap';
import { useEffect } from 'react';
const Loader = ({timeline}) => {
   
    let load = gsap.timeline({
delay: .5});
    useEffect(() => {
        let percent = 1;
        const elementP = document.getElementById("percent1");
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
            } 
           }
     load.to(".percent", {
        opacity: 1,
        duration: 1,
        ease: "power3.inOut"
     })
     .to(".little-info-text", {
        y: 0,
        stagger: .3,
        duration: .5,
        ease: "slow (0.7, 0.7, false)"
     }, "<").set(".marquee", {
        overflow: "visible"
     }).to(".marquee span", {
        y: 0,
        stagger: .3,
        duration: 1,
        ease: "slow (0.7, 0.7, false)"
     }, "<50%")
    setTimeout(move, 2000);
    }, [])
    
    return (
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
    )
}
export default Loader;