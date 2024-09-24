import React from 'react'
import { tvData } from '../data/tv'
import Navbar from '../components/Navbar'
function Tvpage() {
  return (
  <>
  <Navbar/>
    <div className='pageSection'>
      {tvData.map((tv)=>(
        <div>
        <div className='pageImg'>
            <img src={tv.image} alt="TvPic" />
        </div>
        <div className='pageModel'>
            {tv.company},{tv.model}
            </div>
            </div>
      ))}
    </div>
    </>
  )
}

export default Tvpage
