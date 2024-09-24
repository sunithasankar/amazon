import React from 'react'
import { booksData } from '../data/books'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
function Bookpage() {
  return (
  <>
  <Navbar/>
    <div className='pageSection'>
      {booksData.map((books)=>(
        <div>
         <Link to ={`/book/${books.id}`}>
        <div className='pageImg'>
            <img src={books.image} alt="TvPic" />
        </div>
        </Link>
            <div className='pageModel'>
            {books.company},{books.model}
            </div>
            
            </div>
      ))}
    </div>
    </>
  )
}

export default Bookpage