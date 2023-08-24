import React, { useEffect } from 'react';
import {gsap} from 'gsap';
import CSSRulePlugin from 'gsap/CSSRulePlugin';

const MobileNav = () => {
    useEffect(() => {
        const hamburger = document.getElementById("hamburger");
        const tl = gsap.timeline({paused: true});
      
        let spanBefore = CSSRulePlugin.getRule("#hamburger span:before");
        
       
        gsap.set(".menu", {visibility: "hidden"});
        gsap.set(".nav-svg", {visibility: "hidden"});
        
        
        const revealMenuItems = () => {
            const start = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
            const end = "M0 2S175 1 500 1s500 1 500 1V0H0Z";
        
            const power2 = "power2.inOut";
            const power4 = "power4.inOut";
        
            tl.to("#hamburger", 1.25, {
                marginTop: "-10px",
                x: -10,
                y: 10,
                ease: power4
            });
        
            tl.to("#hamburger span", 1, {
                background: "#e2e2dc",
                ease: power2
            }, "<");
            tl.to(spanBefore, 1, {
                background: "#e2e2dc",
                ease: power2
            }, "<");
            tl.to(".btn .btn-outline", 1.25, {
                x: -10,
                y: 10,
                width: "70px",
                "height": "70px",
                border: "1px solid #e2e2dc",
                ease: power4
            }, "<");
        
        tl.set(".nav-svg", 1, {
            visibility: "visible"
        }, "-=1")
        .set(".menu", 1, {
            visibility: "visible"
        }, "-=1")
        .to("#svg1", {
            duration: 0.5,
            attr: {
              d: start
            },
            ease: "Power2.easeIn"
          }).to("#svg1", {
            duration: 0.5,
            attr: {
              d: end
            },
            ease: "Power2.easeIn"
          }).to(".nav-svg", {
            zIndex: -1,
            display: "none"
          }).to(
            ".menu-link", {
                y: 0,
    transform: "skewY(0deg)",
    duration: 1,
    stagger: .3, 
    ease: "power3.inOut"
            }
          ).to([".menu-footer p", ".mobile-Button"], {
            opacity: 1,
            stagger: .3,
            ease: "power3.inOut",
            duration: 1
          }).reverse();
        
        }
        //toggle menu
        const revealMenu = () => {
            revealMenuItems();
        
            hamburger.onclick = () => {
                hamburger.classList.toggle("active");
                tl.reversed(!tl.reversed());
            }
        
        }
        revealMenu();




    }, [])
    
  return (
    <div className='mobile-nav-container'>
        
        <div className="nav-svg">
        <svg viewBox="0 0 1000 1000" preserveAspectRatio="none">
          <path id="svg1" d="M0,1005S175,995,500,995s500,5,500,5V0H0Z"></path>
        </svg>
</div>

        <div id="hamburger">
            <span></span>
        </div>
   

        <div className='menu'>
        <div className="primary-menu">
           <div className='nav-menu-container'>
                    <div class="menu-item">
                        <a href="#"><span className='menu-link'>Home</span></a>
                       
                    </div>

                    <div class="menu-item">
                        <a href="#"><span className='menu-link'>Design</span></a>
                       
                    </div>

                    <div class="menu-item">
                        <a href="#"><span className='menu-link'>Technology</span></a>
                       
                    </div>

                    <div class="menu-item">
                        <a href="#"><span className='menu-link' >Security</span></a>
                       
                    </div>
                  
                </div>
                </div>
                <div className='menu-footer'>
                    <p>Copyright &copy; 2023 Apple Inc.</p>
                    <button className='mobile-Button'>Notify Me</button>
                </div>
                
            </div>
       
    </div>
  )
}

export default MobileNav;