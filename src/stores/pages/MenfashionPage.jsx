import React from 'react'
import { menData } from '../data/men'
import Navbar from '../components/Navbar'
function MenfashionPage() {
  return (
    <>
    <Navbar/>
      <div className='pageSection'>
        {menData.map((men)=>(
          <div>
          <div className='pageImg'>
              <img src={men.image} alt="MenPic" />
          </div>
          <div className='pageModel'>
              {men.brand},{men.model}
              </div>
              </div>
        ))}
      </div>
      </>
  )
}

export default MenfashionPage
