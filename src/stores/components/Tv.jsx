import React from 'react'
import {tvData} from '../data/tv'
import { Link } from 'react-router-dom'
function Tv() {
  return (
    <>
    <h2 style={{margin:"10px"}}>Tv</h2>
    <div className='product-section'>
       {tvData.map((item)=>(
        <div className='imgBox'>
           <Link to={`/tv/${item.id}`}>
            <img src={item.image} alt="TvPic" className='proImg'/>
            <h3>Price:{item.price}</h3>
            <h4>Model:{item.model}</h4>
            </Link>
            </div>
      ))}
    </div>
    </>
  )
}

export default Tv
