import React from 'react'
import { tvData } from '../data/tv'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
function Tvpage() {
  return (
  <>
  <Navbar/>
    <div className='pageSection'>
      {tvData.map((tv)=>(
        <div>
          <Link to={`/tv/${tv.id}`}>
        <div className='pageImg'>
            <img src={tv.image} alt="TvPic" />
        </div>
        </Link>
        <div className='pageModel'>
            {tv.brand},{tv.model}
            </div>
            </div>
      ))}
    </div>
    </>
  )
}

export default Tvpage
