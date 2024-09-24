import React from 'react'
import {acData} from '../data/ac'
import { Link } from 'react-router-dom'
function Ac() {
  return (
    <>
    <h2 style={{margin:"10px"}}>Ac</h2>
    <div className='product-section'>
       {acData.map((item)=>(
        <Link to={`/ac/${item.id}`}>
        <div className='imgBox'>
            <img src={item.image} alt="AcPic" className='proImg'/>
            <h3>Price:{item.price}</h3>
            <h4>Model:{item.model}</h4>
            </div>
            </Link>
      ))}
    </div>
    </>
  )
}

export default Ac
