import React from "react"
import './Product.scss';

const Product = (props) => {
    return (
        <div className="product">
            <div className="div1">
              
                <img className='log' src={props.Z} alt="" />
                <h2 className="prdtHeader">Product Design</h2>
            </div>
            <div className="prtdes">
                <p>Lorem ipsum dolor sit, amet consectetur 
                    adipisicing elit. Explicabo eligendi 
                    tenetur exercitationem?</p>
            </div>
        </div>
    )
}

export default Product