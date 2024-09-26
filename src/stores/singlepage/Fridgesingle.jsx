import React from 'react'
import { useParams } from 'react-router-dom'
import {fridgeData} from '../data/fridge'
import Navbar from '../components/Navbar'

function Fridgesingle() {
    const {id} = useParams();
    const product = fridgeData.find ((item)=>item.id===id)
     return (
        <>
        <Navbar/>
    <div className='singleDetails'>
      <div className='singleImg'>
        <img src={product.image} alt="FridgePic"/>
      </div>
      <div className='itemdetails'>
        <h3>{product.brand}</h3>
        <h2>{product.price}</h2>
        <p>{product.description}</p>
        <button className='btn'>Add to Cart</button>
        <button className='btn'>Buy Now</button>
      </div>      
    </div>
    </>
  )
}


export default Fridgesingle
