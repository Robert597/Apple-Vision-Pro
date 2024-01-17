import React from 'react';
import DesignImage from '/vision pro 2/light_seal.jpg';
import Arrow from '/vision pro 2/Arrow 1.svg';
import {useNavigate} from 'react-router-dom';


const Design = () => {
  const navigate = useNavigate();
  return (
    <div className='section design'>
        <h2>A singular piece of <span>three-dimensionally formed laminated glass</span> acts as an optical surface for the cameras and sensors that view the world. It flows seamlessly into a custom aluminum alloy frame that gently curves to wrap around your face while serving as an attachment point for the <span>Light Seal.</span></h2>
     
            <img src="https://www.apple.com/v/apple-vision-pro/a/images/overview/design/light_seal__fo87cv0zkcmm_large.jpg" alt="" className="design-image"/>
      
       <div className='design-text-Content' onClick={() => {
            navigate('/design');
          }}>
        <p>Learn more about <span className='text-content-design'> Design</span> <span className='design-content-button'><img src={Arrow} className='design-content-icon'/></span> </p>
       </div>
    </div>
  )
}

export default Design