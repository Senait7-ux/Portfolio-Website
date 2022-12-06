import React from 'react'
import './Cards.scss'


const Cards = (props) => {
    return (


        <div className='Card'>
            <img className='crd' src={props.I} alt="" />
            <div >
                <button className='btn'>UI/UX</button>
            </div>
            <h4>Modern UI/UX Website </h4>
            <p>A Modern UI/UX website for a startup company.</p>

        </div>

        

    )
}

export default Cards