import React from 'react'
import { mobileData } from '../data/mobiles'
import Navbar from '../components/Navbar'
import {Link} from 'react-router-dom'
function Mobilepage() {
  return (
  <>
  <Navbar/>
    <div className='pageSection'>
      {mobileData.map((mobile)=>(
        <div>
          <Link to={`/mobiles/${mobile.id}`}>
        <div className='pageImg'>
            <img src={mobile.image} alt="MobilePic" />
        </div>
        </Link>
        <div className='pageModel'>
            {mobile.company},{mobile.model}
            </div>
            </div>
      ))}
    </div>
    </>
  )
}

export default Mobilepage
