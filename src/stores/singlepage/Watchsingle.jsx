import React from 'react'
import { useParams } from 'react-router-dom'
import {watchData} from '../data/watch'
import Navbar from '../components/Navbar'

function Watchsingle() {
    const {id} = useParams();
    const product = watchData.find ((item)=>item.id===id)
     return (
        <>
        <Navbar/>
    <div className='singleDetails'>
      <div className='singleImg'>
        <img src={product.image} alt="WatchPic"/>
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


export default Watchsingle
