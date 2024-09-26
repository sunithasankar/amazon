import React from 'react'
import { fridgeData } from '../data/fridge'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
function Fridgepage() {
  return (
  <>
  <Navbar/>
    <div className='pageSection'>
      {fridgeData.map((fridge)=>(
        <div>
          <Link to={`/fridge/${fridge.id}`}>
        <div className='pageImg'>
            <img src={fridge.image} alt="FridgePic" />
        </div>
        </Link>
        <div className='pageModel'>
            {fridge.product},{fridge.model}
            </div>
            </div>
      ))}
    </div>
    </>
  )
}

export default Fridgepage
