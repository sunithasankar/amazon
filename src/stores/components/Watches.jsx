import React from 'react'
import {watchData} from '../data/watch'
import { Link } from 'react-router-dom'
function Watches() {
  return (
    <>
    <h2 style={{margin:"10px"}}>Watches</h2>
    <div className='product-section'>
       {watchData.map((item)=>(
        <div className='imgBox'>
          <Link to={`/watch/${item.id}`}>
            <img src={item.image} alt="WatchPic" className='proImg'/>
            <h3>Price:{item.price}</h3>
            <h4>Model:{item.model}</h4>
            </Link>
            </div>
      ))}
    </div>
    </>
  )
}

export default Watches
