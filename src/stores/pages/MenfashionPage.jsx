import React from 'react'
import { menData } from '../data/men'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
function MenfashionPage() {
  return (
    <>
    <Navbar/>
      <div className='pageSection'>
        {menData.map((men)=>(
          <div>
            <Link to={`/men/${men.id}`}>
          <div className='pageImg'>
              <img src={men.image} alt="MenPic" />
          </div>
          </Link>
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
