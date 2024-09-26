import React from 'react'
import { useParams } from 'react-router-dom'
import {menData} from '../data/men'
import Navbar from '../components/Navbar'

function Menfashionsingle() {
    const {id} = useParams();
    const product = menData.find ((item)=>item.id===id)
     return (
        <>
        <Navbar/>
    <div className='singleDetails'>
      <div className='singleImg'>
        <img src={product.image} alt="MenPic"/>
      </div>
      <div className='itemdetails'>
        <h3>{product.model}</h3>
        <h2>{product.price}</h2>
        <p>{product.description}</p>
        <button className='btn'>Add to Cart</button>
        <button className='btn'>Buy Now</button>
      </div>      
    </div>
    </>
  )
}


export default Menfashionsingle
