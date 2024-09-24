import React from 'react'
import {tvData} from '../data/tv'
function Tv() {
  return (
    <>
    <h2 style={{margin:"10px"}}>Tv</h2>
    <div className='product-section'>
       {tvData.map((item)=>(
        <div className='imgBox'>
            <img src={item.image} alt="TvPic" className='proImg'/>
            <h3>Price:{item.price}</h3>
            <h4>Model:{item.model}</h4>
            </div>
      ))}
    </div>
    </>
  )
}

export default Tv
