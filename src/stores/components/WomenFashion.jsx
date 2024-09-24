import React from 'react'
import {womanData} from '../data/woman'
function  WomenFashion() {
  return (
    <>
    <h2 style={{margin:"10px"}}>Women Fashion</h2>
    <div className='product-section'>
       {womanData.map((item)=>(
        <div className='imgBox'>
            <img src={item.image} alt="WomanPic" className='proImg'/>
            <h3>Price:{item.price}</h3>
            <h4>Model:{item.model}</h4>
            </div>
      ))}
    </div>
    </>
  )
}

export default WomenFashion
