import React from 'react';
import Arrow from '/vision pro 2/Arrow 1.svg';
import { BsLock } from "react-icons/bs";
import {useNavigate} from 'react-router-dom' 

const Security = () => {
  const navigate = useNavigate();
  return (
    <div className='securityContainer'>
      
      <h4>Security</h4>
      
<div className='securityContent'>
            <div className='securityHeader'>
                <h1>When It Comes to privacy, we don't blink.</h1>
            </div>
            <div className='securityBody'>
            Privacy and security built in. Like every Apple product and service, <span>Apple Vision Pro</span> was designed to help protect your privacy and keep you in control of your data. It builds on the foundation of existing Apple privacy and security features with <span>new technologies like Optic ID, a secure authentication system</span> that uses the uniqueness of your iris.
            </div>
        </div>

        <div className='security-text-Content' onClick={() => {
            navigate('/security');
          }}>
        <p>Learn more about <span className='text-content-security'>Privacy and Security</span> <span className='technology-content-button'><img src={Arrow} className='technology-content-icon'/></span> </p>
       </div>
    </div>
  )
}

export default Security