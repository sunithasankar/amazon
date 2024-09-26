import React from 'react'
import {menData} from '../data/men'
import { Link } from 'react-router-dom'
function MenFashion() {
  return (
    <>
    <h2 style={{margin:"10px"}}>Men Fashion</h2>
    <div className='product-section'>
       {menData.map((item)=>(
        <div className='imgBox'>
          <Link to={`/men/${item.id}`}>
            <img src={item.image} alt="MenPic" className='proImg'/>
            <h3>Price:{item.price}</h3>
            <h4>Model:{item.model}</h4>
            </Link>
            </div>
      ))}
    </div>
    </>
  )
}

export default MenFashion
