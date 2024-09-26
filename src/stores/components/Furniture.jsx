import React from 'react'
import {furnitureData} from '../data/furniture'
import { Link } from 'react-router-dom'
function Furniture() {
  return (
    <>
    <h2 style={{margin:"10px"}}>Furniture</h2>
    <div className='product-section'>
       {furnitureData.map((item)=>(
        <div className='imgBox'>
           <Link to={`/furniture/${item.id}`}>
            <img src={item.image} alt="FurniturePic" className='proImg'/>
            <h3>Price:{item.price}</h3>
            <h4>Model:{item.model}</h4>
            </Link>
            </div>
      ))}
    </div>
    </>
  )
}

export default Furniture
