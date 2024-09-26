import React from 'react'
import { useParams } from 'react-router-dom'
import {tvData} from '../data/tv'
import Navbar from '../components/Navbar'

function Tvsingle() {
    const {id} = useParams();
    const product = tvData.find ((item)=>item.id===id)
     return (
        <>
        <Navbar/>
    <div className='singleDetails'>
      <div className='singleImg'>
        <img src={product.image} alt="TvPic"/>
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


export default Tvsingle
