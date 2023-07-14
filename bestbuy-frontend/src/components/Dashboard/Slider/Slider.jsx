import React, { useState } from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'

import './Slider.css'

const Slider= ()=> {
    const  sliderdata = [
        {
          image: "https://i.ibb.co/58Mq6Mb/slide1.jpg",
          heading: "Slide One",
          desc: "This is the description of slide one Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi quos quas, voluptatum nesciunt illum exercitationem.",
        },
        {
          image: "https://i.ibb.co/8gwwd4Q/slide2.jpg",
          heading: "Slide Two",
          desc: "This is the description of slide two Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi quos quas, voluptatum nesciunt illum exercitationem.",
        },
        {
          image: "https://i.ibb.co/8r7WYJh/slide3.jpg",
          heading: "Slide Three",
          desc: "This is the description of slide three Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi quos quas, voluptatum nesciunt illum exercitationem.",
        },
      ];
    const [currentSlide,setCurrentSlide] = useState(0);
  return (
    <div className='slider'>
     <AiOutlineArrowLeft className='arrow-left'/>
     <AiOutlineArrowRight className='arrow-right'/>
     {sliderdata.map((slide,index)=>{
           return(
            <div className={index===currentSlide?
            'slide current': 'slide'} key={index}>
              {index===currentSlide &&(
               
                 <>
                 <img src={slide.image} alt="" />
                 <div className='content'>
                      <h2>{slide.heading}</h2>
                       <p>{slide.desc}</p>
                       <hr/>
                       <button className='btn btn-primary'>
                        Get started
                       </button>
                 </div>
                 </>

              )}
            
            </div>
           )

      })}
    </div>

  )
}

export default Slider