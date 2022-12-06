import React from 'react'
import Product from '../../Components/Product';
import './Speciality.scss';
import Logo1 from '../../assets/Logo1.png'
import Logo2 from '../../assets/Logo2.png'
import Logo3 from '../../assets/Logo3.png'

const Speciality = () => {
  return (


    <div>
         
    <div className='special'> 
        <h1>Specialities</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br/> Odit delectus accusantium dolor laboriosam atque ut aperiam!</p>
     </div>
      < div className='disp'>
       <Product Z={Logo1}/>
       <Product Z={Logo2}/>
       <Product Z={Logo3}/>
       </div>
    </div>
  )

}
 
export default Speciality