import React from 'react'

const Footer = () => {
  return (
    <div className='footer-container'>

    <div className='footer-top-content'>
        <div className='footer-title'>
            <h4>Apple</h4>
            <h1>Vision Pro<span>&copy;</span></h1>
        </div>
   

   
        <ul className='footer-menu'>
            <li><a href="#">Home</a></li>
            <li><a href="#">Design</a></li>
            <li><a href="#">Vision OS</a></li>
            <li><a href="#">Technology</a></li>
            <li><a href="#">Security</a></li>
        </ul>
  

    <div className='footer-shop'>
      <p>More ways to shop: <a href='#'>Find an Apple Store</a> near you. Or call 1-800-MY-APPLE.</p>
       
    </div>

    </div>

  <hr/>
  <div className='footer-bottom'>
    <p>Copyright © 2023 Apple Inc. All rights reserved.</p>
    <p>United States</p>
  </div>

    </div>
  )
}

export default Footer