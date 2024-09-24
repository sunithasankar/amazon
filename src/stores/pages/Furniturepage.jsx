import React from 'react'
import { furnitureData } from '../data/furniture'
import Navabar from '../components/Navbar'

function Furniturepage() {
  return (
    <>
    <Navabar/>
    <div className='pageSection'>
      {furnitureData.map((furniture)=>(
       <div>
        <div className='pageImg'>
            <img src={furniture.image} alt="FurniturePic"/>
            </div>
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
