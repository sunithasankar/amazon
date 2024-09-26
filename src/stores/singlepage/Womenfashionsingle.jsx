import React from 'react'
import { useParams } from 'react-router-dom'
import {womanData} from '../data/woman'
import Navbar from '../components/Navbar'

function Womenfashionsingle() {
    const {id} = useParams();
    const product = womanData.find ((item)=>item.id===id)
     return (
        <>
        <Navbar/>
    <div className='singleDetails'>
      <div className='singleImg'>
        <img src={product.image} alt="WomanMobilePic"/>
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


export default Womenfashionsingle
