import React from 'react'
import {computerData} from '../data/computers'
function Computer() {
  return (
    <>
    <h2 style={{margin:"10px"}}>Computers</h2>
    <div className='product-section'>
       {computerData.map((item)=>(
        <div className='imgBox'>
            <img src={item.image} alt="ComputerPic" className='proImg'/>
            <h3>Price:{item.price}</h3>
            <h4>Model:{item.model}</h4>
            </div>
      ))}
    </div>
    </>
  )
}

export default Computer
