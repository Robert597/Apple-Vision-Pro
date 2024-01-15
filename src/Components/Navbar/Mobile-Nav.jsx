import {Link} from "react-router-dom";
import { useEffect } from "react";
import gsap from 'gsap';
const MobileNav = () => {
   
    
  return (
    <div className='mobile-nav-container'>
        <div className="main-col">
            <div className="nav-link" onClick={
                () => {
                    document.getElementById('mobile-btn').click();
                }
            }>
                <Link to="/">Home</Link>
                <div className="nav-item-wrapper"></div>
            </div>

            <div className="nav-link" onClick={
                () => {
                    document.getElementById('mobile-btn').click();
                }
            }>
                <Link to="/design">Design</Link>
                <div className="nav-item-wrapper"></div>
            </div>

            <div className="nav-link" onClick={
                () => {
                    document.getElementById('mobile-btn').click();
                }
            }>
                <Link to="/technology">Technology</Link>
                <div className="nav-item-wrapper"></div>
            </div>

            <div className="nav-link" onClick={
                () => {
                    document.getElementById('mobile-btn').click();
                }
            }>
                <Link to="/security">Security</Link>
                <div className="nav-item-wrapper"></div>
            </div>
        </div>
       
       <div className="menu-footer">
        <p>copyright&copy; 2023 Apple Inc.</p>
        <button className="mobile-Button">Notify Me</button>
       </div>
    </div>
  )
}

export default MobileNav;