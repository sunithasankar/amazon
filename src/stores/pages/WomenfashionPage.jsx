import React from 'react'
import {womanData} from '../data/woman'
import Navbar from '../components/Navbar'

function WomenfashionPage () {
  return (
    <>
    <Navbar/>
      <div className='pageSection'>
        {womanData.map((woman)=>(
          <div>
          <div className='pageImg'>
              <img src={woman.image} alt="WomanPic" />
          </div>
          <div className='pageModel'>
              {woman.brand},{woman.model}
              </div>
              </div>
        ))}
      </div>
      </>
  )
}

export default WomenfashionPage
