import React from 'react'
import {kitchenData} from '../data/kitchen'
import { Link } from 'react-router-dom'
function Kitchen() {
  return (
    <>
    <h2 style={{margin:"10px"}}>Kitchen</h2>
    <div className='product-section'>
       {kitchenData.map((item)=>(
        <div className='imgBox'>
          <Link to={`/kitchen/${item.id}`}>
            <img src={item.image} alt="KitchenPic" className='proImg'/>
            <h3>Price:{item.price}</h3>
            <h4>Model:{item.model}</h4>
            </Link>
            </div>
      ))}
    </div>
    </>
  )
}

export default Kitchen
