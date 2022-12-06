import React from 'react'
import './Works.scss';
import Cards from './Cards';
import Image1 from "../../assets/Image1.jpg";
import Image2 from "../../assets/Image2.jpg"


const Works = () => {
  return (

    <div className='workdiv'>
      <h1 className='worksheader'>My Works</h1>
      <div className='btn'>
        <button>UI/UX</button>
        <button>Mobile App</button>
        <button>Web App</button>
        <button>React JS</button>
        <button>All</button>
      </div>
  <Cards I={Image1}></Cards>
  <Cards I={Image2}></Cards>
  <Cards I={Image1}></Cards>
  <Cards I={Image2}></Cards>
  <Cards I={Image1}></Cards>
  <Cards I={Image2}></Cards>
  <Cards I={Image1}></Cards>
  
    </div>

  )
}


export default Works