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
    useEffect(() => {
       const videos = gsap.utils.toArray('.about-video-lg');
       const videos1 = gsap.utils.toArray('.about-video-sm');
       const texts = gsap.utils.toArray(".about-video-content");
       videos.forEach((video) => {
        ScrollTrigger.create({
            trigger: video,
            toggleClass: 'about-active',
            start: 'top center',
            end: 'bottom top'
        })
       });
       videos1.forEach((video) => {
        ScrollTrigger.create({
            trigger: video,
            toggleClass: 'about-active',
            start: 'top center',
            end: 'bottom top'
        })
       });
       
    }, [])
    
  return (
    <div className='AboutContainer'>
        <div className='aboutVideoContainer aboutVideoContainer1'>
            <div className="about-video-lg about-video-lg1">
                <video  src={Video3} onLoadedMetadata="this.muted = true" playsInline autoPlay muted loop preload='auto' className='aboutVideo'>
                </video>
                <div className='about-video-content'>
                   <p>Welcome to the Era of Spatial Computing</p> 
                </div>
            </div>
            <div className='about-video-md'>
            <div className="about-video-sm about-video-sm1">
            <video  src={Video2} onLoadedMetadata="this.muted = true" playsInline autoPlay muted loop preload='auto'
            className='aboutVideo'>
                </video>
                <div className='about-video-content'>
                <p>You navigate simply by using your hands, voices and eyes.</p>
                </div>
            </div>

            <div className="about-video-sm about-video-sm2">
            <video  src={Video5} onLoadedMetadata="this.muted = true" playsInline autoPlay muted loop preload='auto'
            className='aboutVideo'>
                </video>
                <div className='about-video-content'>
                <p>so you can do the things you love in ways never possible.</p>
                </div>
            </div>
            </div>
        </div>

        <div className='aboutVideoContainer aboutVideoContainer2'>
            <div className="about-video-lg about-video-lg2">
            <video  src={Video7} onLoadedMetadata="this.muted = true" playsInline autoPlay muted loop preload='auto'
            className='aboutVideo'>
                </video>
                <div className='about-video-content'>
                    <p>Get on the same page in the same space.</p>
                </div>
            </div>
            <div className='about-video-md'>
            <div className="about-video-sm about-video-sm3">
            <video  src={Video8} onLoadedMetadata="this.muted = true" playsInline autoPlay muted loop preload='auto'
            className='aboutVideo'>
                </video>
                <div className='about-video-content'>
                    <p>Apple's First Spatial Operating System.</p>
                </div>
            </div>

            <div className="about-video-sm about-video-sm4">
            <video  src={Video6} onLoadedMetadata="this.muted = true" playsInline autoPlay muted loop preload='auto'
            className='aboutVideo'>
                </video>
                <div className='about-video-content'>
                    <p>Be in the moment all over again.</p>
                </div>
            </div>
            </div>
        </div>

        <div className='aboutVideoContainer aboutVideoContainer3'>
            <div className="about-video-lg about-video-lg3">
            <video  src={Video4} onLoadedMetadata="this.muted = true" playsInline autoPlay muted loop preload='auto'
            className='aboutVideo'>
                </video>
                <div className='about-video-content'>
                    <p>Free your desktop and your apps will follow.</p>
                </div>
            </div>
            <div className='about-video-md'>
            <div className="about-video-sm about-video-sm5">
            <video  src={Video9} onLoadedMetadata="this.muted = true" playsInline autoPlay muted loop preload='auto'
            className='aboutVideo'>
                </video>
                <div className='about-video-content'>
                    <p>An advanced Spatial Audio system is core to the Apple Vision Pro experience, creating the feeling that sounds are coming from the environment around the user.</p>
                </div>
            </div>

            <div className="about-video-sm about-video-sm6">
            <video  src={Video1} onLoadedMetadata="this.muted = true" playsInline autoPlay muted loop preload='auto'
            className='aboutVideo'>
                </video>
                <div className='about-video-content'>
<p>Apple Vision Pro seamlessly blends digital content with your physical space.</p>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default About;