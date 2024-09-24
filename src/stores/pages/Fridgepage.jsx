import React from 'react'
import { fridgeData } from '../data/fridge'
import Navbar from '../components/Navbar'
function Fridgepage() {
  return (
  <>
  <Navbar/>
    <div className='pageSection'>
      {fridgeData.map((fridge)=>(
        <div>
        <div className='pageImg'>
            <img src={fridge.image} alt="FridgePic" />
        </div>
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
