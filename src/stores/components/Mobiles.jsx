import React from 'react'
import {mobileData} from '../data/mobiles'
import {Link} from 'react-router-dom'

function Mobiles() {
  return (
    <>
    <h2 style={{margin:"10px"}}>Mobiles</h2>
    <div className='product-section'>
       {mobileData.map((item)=>(
        <div className='imgBox'>
          <Link to={`/mobiles/${item.id}`}>
            <img src={item.image} alt="MobilePic" className='proImg'/>
             <h3>Price:{item.price}</h3>
            <h4>Model:{item.model}</h4>  
            </Link>          
            </div>
      ))}
    </div>
    </>
  )
}

export default Mobiles
