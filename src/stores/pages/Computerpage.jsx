import React from 'react'
import { computerData } from '../data/computers'
import Navbar from '../components/Navbar'
import {Link} from 'react-router-dom'

function Computerpage() {
  return (
    <>
    <Navbar/>
    <div className='pageSection'>
      {computerData.map((computer)=>(
        <div>
          <Link to={`/computer/${computer.id}`}>
            <div className='pageImg'>
            <img src={computer.image} alt="ComputerPic"/>
            </div>
            </Link>
        <div className='pageModel'>
            {computer.company},{computer.model}
        </div>
        </div>
      ))}
      </div>
    </>
    
  )
}

export default Computerpage
