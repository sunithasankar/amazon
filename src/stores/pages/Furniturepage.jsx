import React from 'react'
import { furnitureData } from '../data/furniture'
import Navabar from '../components/Navbar'
import { Link } from 'react-router-dom'

function Furniturepage() {
  return (
    <>
    <Navabar/>
    <div className='pageSection'>
      {furnitureData.map((furniture)=>(
       <div>
        <Link to={`/furniture/${furniture.id}`}>
        <div className='pageImg'>
            <img src={furniture.image} alt="FurniturePic"/>
            </div>
            </Link>
        <div className='pageModel'>
            {furniture.brand},{furniture.image}
            </div>
        </div> 
      ))}
    </div>
    </>
  )
}

export default Furniturepage
