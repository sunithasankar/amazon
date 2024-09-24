import React from 'react'
import { kitchenData } from '../data/kitchen'
import Navbar from '../components/Navbar'
function KichenPage() {
  return (
  <>
  <Navbar/>
    <div className='pageSection'>
      {kitchenData.map((kitchen)=>(
        <div>
        <div className='pageImg'>
            <img src={kitchen.image} alt="KitchenPic" />
        </div>
        <div className='pageModel'>
            {kitchen.product},{kitchen.model}
            </div>
            </div>
      ))}
    </div>
    </>
  )
}

export default KichenPage
