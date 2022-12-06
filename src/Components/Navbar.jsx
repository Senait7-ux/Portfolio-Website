import React from 'react'
import './Navbar.scss'
import { TfiThemifyLogo } from 'react-icons/tfi'
import { BsInstagram } from 'react-icons/bs'
import { CiLinkedin } from 'react-icons/ci'
import { CiFacebook } from 'react-icons/ci'
import Person from '../../src/assets/Person.jpg'
const Navbar = () => {
  return (

    <div className='nav'>

      <div className='lg'>
        <TfiThemifyLogo />
      </div>
      <div>
        <ul className='Navlist'>
          <li>Home</li>
          <li>About</li>
          <li>Work</li>
          <li>Skills</li>
          <li>contact</li>
        </ul>
      </div>


      <div className='nav2'>


        <div>
          <img className='navimg' src={Person.jpg} alt="" />
        </div>

        <div className='social'>
          <div>
            <h1>An Interactive Designer</h1>
            <p>Lorem ipsum dolor sit amet consectetur <br />adipisicing elit.
              Quisquam praesentium <br /> sunt quaerat perferendis
              enim aspernatur. Earum?</p>
          </div>

          <div className='btn2'>
            <button>Book a Call</button>
            <button>My Works</button>
          </div>


          <div className='icon'>
            <p> Follow me on:</p>
            <div >
              <BsInstagram />
              <CiLinkedin />
              <CiFacebook />
            </div>

          </div>

        </div>

      </div>


    </div>
  )
}

export default Navbar