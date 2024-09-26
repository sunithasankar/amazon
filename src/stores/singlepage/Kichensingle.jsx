import React from 'react'
import { useParams } from 'react-router-dom'
import {kitchenData} from '../data/kitchen'
import Navbar from '../components/Navbar'

function Kitchensingle() {
    const {id} = useParams();
    const product = kitchenData.find ((item)=>item.id===id)
     return (
        <>
        <Navbar/>
    <div className='singleDetails'>
      <div className='singleImg'>
        <img src={product.image} alt="KitchenPic"/>
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


export default Kitchensingle
