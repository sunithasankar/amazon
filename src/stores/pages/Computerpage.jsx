import React from 'react'
import { computerData } from '../data/computers'
import Navbar from '../components/Navbar'

function Computerpage() {
  return (
    <>
    <Navbar/>
    <div className='pageSection'>
      {computerData.map((computer)=>(
        <div>
            <div className='pageImg'>
            <img src={computer.image} alt="ComputerPic"/>
            </div>
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
