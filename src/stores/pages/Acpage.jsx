import React from 'react'
import { acData } from '../data/ac'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

function Acpage() {
  return (
  <>
  <Navbar/>
    <div className='pageSection'>
      {acData.map((ac)=>(
        <div>
          <Link to={`/ac/${ac.id}`}>
        <div className='pageImg'>
            <img src={ac.image} alt="AcPic" />
        </div>
        </Link>
        <div className='pageModel'>
            {ac.company},{ac.model}
            </div>
            </div>
      ))}
    </div>
    </>
  )
}

export default Acpage
