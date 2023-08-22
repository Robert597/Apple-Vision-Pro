import React, { useEffect } from 'react';
import {gsap} from 'gsap';
import CSSRulePlugin from 'gsap/CSSRulePlugin';

const MobileNav = () => {
    useEffect(() => {
        const hamburger = document.getElementById("hamburger");


const tl = gsap.timeline({paused: true});
let path = document.querySelector("path");
let spanBefore = CSSRulePlugin.getRule("#hamburger span:before");

gsap.set(spanBefore, {background: "#000"});
gsap.set(".menu", {visibility: "hidden"});


const revealMenuItems = () => {
    const start = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
    const end = "M0,1005S175,995,500,995s500,5,500,5V0H0Z";

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

/*tl.to(path, 0.8, {
    attr: {
        d: end
    },
    ease: "power2.inOut"
}, "<").to(path, 0.5, {
    attr: {
        d: start
    },
    ease: "power2.inOut"
}, "-0.5");*/

tl.to(".menu", 1, {
    visibility: "visible"
}, "-=1");

tl.to(".menu-item > a", 1, {
    top: "-30px",
    ease: power2,
    stagger: {
        amount: 0.5
    }
}, "-=1" ).reverse();

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
        
        <div id="hamburger">
            <span></span>
        </div>
   

        <div className='menu'>
        <div class="primary-menu">
            <div class="menu-container">
                <div class="wrapper">
                    <div class="menu-item">
                        <a href="#"><span>I</span>Home</a>
                        <div class="menu-item-revealer"></div>
                    </div>

                    <div class="menu-item">
                        <a href="#"><span>II</span>Design</a>
                        <div class="menu-item-revealer"></div>
                    </div>

                    <div class="menu-item">
                        <a href="#"><span>III</span>Technology</a>
                        <div class="menu-item-revealer"></div>
                    </div>

                    <div class="menu-item">
                        <a href="#"><span>IV</span>Security</a>
                        <div class="menu-item-revealer"></div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default MobileNav;