import React from 'react'
import {menData} from '../data/men'
function MenFashion() {
  return (
    <>
    <h2 style={{margin:"10px"}}>Men Fashion</h2>
    <div className='product-section'>
       {menData.map((item)=>(
        <div className='imgBox'>
            <img src={item.image} alt="MenPic" className='proImg'/>
            <h3>Price:{item.price}</h3>
            <h4>Model:{item.model}</h4>
            </div>
      ))}
    </div>
    </>
  )
}

export default MenFashion
