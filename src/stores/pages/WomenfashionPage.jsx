import React from 'react'
import {womanData} from '../data/woman'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

function WomenfashionPage () {
  return (
    <>
    <Navbar/>
      <div className='pageSection'>
        {womanData.map((woman)=>(
          <div>
            <Link to={`/women/${woman.id}`}>
          <div className='pageImg'>
              <img src={woman.image} alt="WomanPic" />
          </div>
          </Link>
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
