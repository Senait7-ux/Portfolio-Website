import React from 'react'
import './Testimonial.scss'
import Image6 from "../../assets/Image6.jpg"
import { IoIosArrowBack } from 'react-icons/io'
import { IoIosArrowForward } from 'react-icons/io'
import { useState } from 'react'

const data = [
  {
    id:1, 
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit.Accusamus saepe possimusanimi vel labore nihil, obcaecati similiquerepudiandae quod molestiae consequatur?"
    ,name:"John Doe",
    role:"CEO & Founder at Apple",
    profile:Image6
  
  
  }, {
    id:2, 
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit.Accusamus saepe possimusanimi vel labore nihil, obcaecati similiquerepudiandae quod molestiae consequatur?"
    ,name:"Smith Kevin",
    role:"CEO & Founder at Apple",
    profile:Image6
  
  
  }, {
    id:3, 
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit.Accusamus saepe possimusanimi vel labore nihil, obcaecati similiquerepudiandae quod molestiae consequatur?"
    ,name:"Alen kelly",
    role:"CEO & Founder at Apple",
    profile:Image6
  
  
  }, {
    id:4,
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit.Accusamus saepe possimusanimi vel labore nihil, obcaecati similiquerepudiandae quod molestiae consequatur?"
    ,name:"Ellen Kate",
    role:"CEO & Founder at Apple",
    profile:Image6
  
  
  }
] 

const Testimonial = () => {

  const [currentIndex, setCurrentIndex]= useState(0)

  const Next =()=>{
    

    if (currentIndex==data.length-1) {
      setCurrentIndex(0)
    }
    else {setCurrentIndex(currentIndex+1)}

    }

    const Before =()=>{
      if (currentIndex==data.length+1) {
        setCurrentIndex(0)
      }
      else {setCurrentIndex(currentIndex-1)}
      
    }
      return (
    <div className='div1'>
      <div>
        <h1>Testimonial</h1>
      </div>

      <div className='test'>
        <div>
          <img src={data[currentIndex].profile}></img>
        </div>
        <div>
          <p>{data[currentIndex].desc}</p>
          <span/>
          <p>{data[currentIndex].name} <br /> {data[currentIndex].role}</p>
          
        </div>

      </div>

      <div className='arrow'>
        <IoIosArrowBack onClick={Before} />
        <IoIosArrowForward onClick={Next} />
      </div>


    </div>
  )
}

export default Testimonial