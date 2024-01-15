import React from 'react';
import Slider from "react-slick";
import {FaArrowLeftLong, FaArrowRightLong} from 'react-icons/fa6'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Details = ({selected, title}) => {
  const slider = React.useRef(null);
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    centerMode: true,
    lazyLoad: 'progressive',
    slidesToShow: 1.5,
    responsive: [
{
  breakpoint: 1000,
 settings: {
  slidesToShow: 1
 }
}
    ],
    slidesToScroll: 1
  }
 
  return (
    <div className='slider-details'>
      <div className='sliderTop'>
        <h3>Vision Pro <br/> <span className='orange-text'>{title}</span> </h3>
        
        

        <div className='slider-top-arrows'>
          <button onClick={() => slider?.current?.slickPrev()}><FaArrowLeftLong className="slider-arrow"/></button>
          <button onClick={() => slider?.current?.slickNext()}><FaArrowRightLong className="slider-arrow"/></button>
        </div>
        </div>
        <Slider ref={slider} {...settings}>
          {selected?.map((item) => (
            <div className='inner-slider'>
              <div className='inner-slider-img'>
                {
                  item?.video ? (
                    <video  src={`/vision pro 2/${item.image}`} onLoadedMetadata="this.muted = true" playsInline autoPlay   muted loop preload='auto'
            className='aboutVideo'>
                </video>
                  ) : (
                    <img src={`/vision pro 2/${item.image}`} alt='slider'/>
                  )
                }
                
              </div>
              <div className='inner-slider-text' dangerouslySetInnerHTML={{__html: item.text}}/>
            </div>
          ))}
        </Slider>
      </div>
  )
}

export default Details;