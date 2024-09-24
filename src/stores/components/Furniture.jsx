import React from 'react'
import {furnitureData} from '../data/furniture'
function Furniture() {
  return (
    <>
    <h2 style={{margin:"10px"}}>Furniture</h2>
    <div className='product-section'>
       {furnitureData.map((item)=>(
        <div className='imgBox'>
            <img src={item.image} alt="FurniturePic" className='proImg'/>
            <h3>Price:{item.price}</h3>
            <h4>Model:{item.model}</h4>
            </div>
      ))}
    </div>
    </>
  )
}

export default Furniture
