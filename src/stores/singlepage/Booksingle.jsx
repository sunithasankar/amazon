import React from 'react'
import { useParams } from 'react-router-dom'
import {booksData} from '../data/books'
import Navbar from '../components/Navbar'

function Booksingle() {
    const {id} = useParams();
    const product = booksData.find ((item)=>item.id===id)
     return (
        <>
        <Navbar/>
    <div className='singleDetails'>
      <div className='singleImg'>
        <img src={product.image} alt="BookPic"/>
      </div>
      <div className='itemdetails'>
        <h3>{product.product}</h3>
        <h2>{product.price}</h2>
        <p>{product.description}</p>
        <button className='btn'>Add to Cart</button>
        <button className='btn'>Buy Now</button>
      </div>      
    </div>
    </>
  )
}


export default Booksingle
