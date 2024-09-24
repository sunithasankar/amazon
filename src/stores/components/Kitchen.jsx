import React from 'react'
import {kitchenData} from '../data/kitchen'
function Kitchen() {
  return (
    <>
    <h2 style={{margin:"10px"}}>Kitchen</h2>
    <div className='product-section'>
       {kitchenData.map((item)=>(
        <div className='imgBox'>
            <img src={item.image} alt="KitchenPic" className='proImg'/>
            <h3>Price:{item.price}</h3>
            <h4>Model:{item.model}</h4>
            </div>
      ))}
    </div>
    </>
  )
}

export default Kitchen
