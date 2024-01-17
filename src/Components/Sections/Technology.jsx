import React, {useEffect} from 'react';
import {gsap} from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Arrow from '/vision pro 2/Arrow 1.svg';
import Tech from '/Apple vision canvas images/Vision00025.png';
import {useNavigate} from "react-router-dom";

const Technology = () => {
  const navigate = useNavigate();
useEffect(() => {
    let pinAmount = document.querySelector(".Detail");
 const canvas1 = () => {
    const canvas = document.querySelector("#canvas");
    const context = canvas.getContext("2d");
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    window.addEventListener("resize", function () {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        render();
        });

        function files(index) {
            var data = `
            .//Apple vision canvas images/Vision00001.png
            .//Apple vision canvas images/Vision00002.png
            .//Apple vision canvas images/Vision00003.png
            .//Apple vision canvas images/Vision00004.png
            .//Apple vision canvas images/Vision00005.png
            .//Apple vision canvas images/Vision00006.png
            .//Apple vision canvas images/Vision00007.png
            .//Apple vision canvas images/Vision00008.png
            .//Apple vision canvas images/Vision00009.png
            .//Apple vision canvas images/Vision00010.png
            .//Apple vision canvas images/Vision00011.png
            .//Apple vision canvas images/Vision00012.png
            .//Apple vision canvas images/Vision00013.png
            .//Apple vision canvas images/Vision00014.png
            .//Apple vision canvas images/Vision00015.png
            .//Apple vision canvas images/Vision00016.png
            .//Apple vision canvas images/Vision00017.png
            .//Apple vision canvas images/Vision00018.png
            .//Apple vision canvas images/Vision00019.png
            .//Apple vision canvas images/Vision00020.png
            .//Apple vision canvas images/Vision00021.png
            .//Apple vision canvas images/Vision00022.png
            .//Apple vision canvas images/Vision00023.png
            .//Apple vision canvas images/Vision00024.png
            .//Apple vision canvas images/Vision00025.png
            `;
            return data.split("\n")[index];
            }

            const frameCount = 25;

        const images = [];
    const imageSeq = {
frame: 1,
};

for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
    }
    

    gsap.to(imageSeq, {
        frame: frameCount - 1,
        snap: "frame",
        ease: `none`,
        scrollTrigger: {
          scrub: 0.15,
          trigger: `#page17`,
          //   set start end according to preference
          start: 'center+=200 top',
          end: `bottom top`
        },
        onUpdate: render,
        });

        images[1].onload = render;

function render() {
scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
var canvas = ctx.canvas;
var hRatio = canvas.width / img.width;
var vRatio = canvas.height / img.height;
var ratio = Math.max(hRatio, vRatio);
var centerShift_x = (canvas.width - img.width * ratio) / 2;
var centerShift_y = (canvas.height - img.height * ratio) / 2;
ctx.clearRect(0, 0, canvas.width, canvas.height);
ctx.drawImage(
  img,
  0,
  0,
  img.width,
  img.height,
  centerShift_x,
  centerShift_y,
  img.width * ratio,
  img.height * ratio
);
}
ScrollTrigger.create({

trigger: "#page17",
// markers:true,

//   set start end according to preference
start: `center+=200 top`,
end: `bottom top`
});


 }
 canvas1();
}, []);

  return (
    <div className='Technology'>
        <div id="page17">
        <h4>Technology</h4>
        <h1>Innovation you can <br/> see, hear, and feel.</h1>
        <p><span>Pushing boundaries from the inside out.</span> Spatial experiences on Vision Pro are only possible through groundbreaking Apple technology. Displays the size of a postage stamp that deliver more pixels than a 4K TV to each eye. Incredible advances in Spatial Audio. A revolutionary dual‑chip design featuring custom Apple silicon. A sophisticated array of cameras and sensors. All the elements work together to create an unprecedented experience you have to see to believe.
        </p>
        <canvas id="canvas"></canvas>
        <img src={Tech} alt="mobile-graphic" className='tech'/>
        <div className='technology-text-Content' onClick={() => {
            navigate('/technology');
          }}>
        <p>Learn more about <span className='text-content-technology'> Technology</span> <span className='technology-content-button'><img src={Arrow} className='technology-content-icon'/></span> </p>
       </div>
       </div>
      
       
      
       
    </div>
  )
}

export default Technology;