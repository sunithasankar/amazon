import React from 'react'
import {computerData} from '../data/computers'
import { Link } from 'react-router-dom'
function Computer() {
  return (
    <>
    <h2 style={{margin:"10px"}}>Computers</h2>
    <div className='product-section'>
       {computerData.map((item)=>(
        <div className='imgBox'>
          <Link to={`/computer/${item.id}`}>
            <img src={item.image} alt="ComputerPic" className='proImg'/>
            <h3>Price:{item.price}</h3>
            <h4>Model:{item.model}</h4>
            </Link>
            </div>
      ))}
    </div>
    </>
  )
}

export default Computer
