import React from 'react'
import {watchData} from '../data/watch'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

function Watchpage() {
  return (
    <>
    <Navbar />
     <div className='pageSection'> 
      {watchData.map((watch)=>(
        <div>
          <Link to ={`/watch/${watch.id}`}>
            <div className='pageImg'>
            <img src={watch.image} alt="WatchPic"/>
            </div>
            </Link>
            <div className='pageModel'>
                {watch.brand},{watch.model}
                </div>
            </div>
      ))}
      </div>
    
    </>
   
  )
}

export default Watchpage
