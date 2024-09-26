import React from 'react'
import { kitchenData } from '../data/kitchen'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
function KichenPage() {
  return (
  <>
  <Navbar/>
    <div className='pageSection'>
      {kitchenData.map((kitchen)=>(
        <div>
        <div className='pageImg'>
          <Link to={`/kitchen/${kitchen.id}`}>
            <img src={kitchen.image} alt="KitchenPic" />
            </Link>
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
