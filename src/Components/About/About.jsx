import React, { useEffect } from 'react';
import Video1 from "/vision pro 2/large (1).mp4";
import Video2 from "/vision pro 2/large (2).mp4";
import Video3 from "/vision pro 2/large.mp4";
import Video4 from "/vision pro 2/large (4).mp4";
import Video5 from "/vision pro 2/large (5).mp4";
import Video6 from "/vision pro 2/large (6).mp4";
import Video7 from "/vision pro 2/large (7).mp4";
import Video8 from "/vision pro 2/large (8).mp4";
import Video9 from "/vision pro 2/large_video.mp4";
import {gsap} from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const About = () => {
   
    
  return (
    <div className='AboutContainer'>
        <div className='aboutVideoContainer'>
            <div className="about-video-lg">
               
                <video  src={Video3}  playsInline autoPlay  muted loop preload='auto' className='aboutVideo'>
                </video>
                <div className='about-video-content'>
                   <p>Welcome to the Era of Spatial Computing</p> 
                </div>
            </div>
            
            <div className="about-video-lg">
            <video  src={Video2}  playsInline autoPlay   muted loop preload='auto'
            className='aboutVideo'>
                </video>
                <div className='about-video-content'>
                <p>You navigate simply by using your hands, voices and eyes.</p>
                </div>
            </div>

            <div className="about-video-lg">
            <video  src={Video5}  playsInline autoPlay  muted loop preload='auto'
            className='aboutVideo'>
                </video>
                <div className='about-video-content'>
                <p>so you can do the things you love in ways never possible.</p>
                </div>
            </div>
        

            <div className="about-video-lg ">
            <video  src={Video7}  playsInline autoPlay   muted loop preload='auto'
            className='aboutVideo'>
                </video>
                <div className='about-video-content'>
                    <p>Get on the same page in the same space.</p>
                </div>
            </div>
          
            <div className="about-video-lg">
            <video  src={Video8}  playsInline autoPlay   muted loop preload='auto'
            className='aboutVideo'>
                </video>
                <div className='about-video-content'>
                    <p>Apple's First Spatial Operating System.</p>
                </div>
            </div>

            <div className="about-video-lg">
            <video  src={Video6}  playsInline autoPlay   muted loop preload='auto'
            className='aboutVideo'>
                </video>
                <div className='about-video-content'>
                    <p>Be in the moment all over again.</p>
                </div>
            </div>
         
       

       
            <div className="about-video-lg">
            <video  src={Video4}  playsInline autoPlay  muted loop preload='auto'
            className='aboutVideo'>
                </video>
                <div className='about-video-content'>
                    <p>Free your desktop and your apps will follow.</p>
                </div>
            </div>
            
            <div className="about-video-lg">
            <video  src={Video9}  playsInline autoPlay  muted loop preload='auto'
            className='aboutVideo'>
                </video>
                <div className='about-video-content'>
                    <p>An advanced Spatial Audio system is core to the Apple Vision Pro experience, creating the feeling that sounds are coming from the environment around the user.</p>
                </div>
            </div>

            <div className="about-video-lg">
            <video  src={Video1}  playsInline autoPlay  muted loop preload='auto'
            className='aboutVideo'>
                </video>
                <div className='about-video-content'>
<p>Apple Vision Pro seamlessly blends digital content with your physical space.</p>
                </div>
            </div>
            </div>
        
    </div>
  )
}

export default About;