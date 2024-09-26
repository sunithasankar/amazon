import React from 'react'
import { useParams } from 'react-router-dom'
import Navabar from '../components/Navbar'
import { computerData } from '../data/computers'

function Computersingle() {
  const {id} =useParams()
  const product= computerData.find((item)=>item.id===id)
  return (
    <>
    <Navabar/>
    <div className='singleDetails'>
      <div className='singleImg'>
      <img src={product.image} alt="ComputerPic"/>
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

export default Computersingle
