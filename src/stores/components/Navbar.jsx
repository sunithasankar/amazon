import React from 'react';
import '../../App.css';
import { NavLink} from 'react-router-dom'
function Navabar() {
  return (
    <>
    <div className='nav-section'>
      <div className='logo'>
        <img src='../assets/logo.jpg' alt="LogoPic"/>
      </div>
      <div className='search'>
        <input type="text" placeholder='Search here...'/>
        <button className='btn'>Go</button>
      </div>
      <div className='user-section'>
        <div className='user'>SignIn/SignUp</div>
        <div className='cart'>Cart</div>
      </div>
    </div>
    <div className='subMenu'>
      <ul>
        <NavLink to="/mobiles" style={({isActive})=>isActive ? {color:"#ffaf37"} : {color:"white"}}>
        <li>Mobiles</li>
        </NavLink>
       <NavLink to="/watches" style={({isActive})=>isActive ? {color:"#ffaf37"} : {color:"white"} }>
       <li>Watches</li>
       </NavLink>
        <NavLink to="/menfashion" style={({isActive})=>isActive ? {color:"#ffaf37"} : {color:"white"}}>
        <li>Men Fashion</li>
        </NavLink>
        <NavLink to="/womenfashion" style={({isActive})=> isActive ? {color:"#ffaf37"} : {color:"white"}}>
        <li>Women Fashion</li>
        </NavLink>
        <NavLink to="/kitchen" style={({isActive})=> isActive ? {color:"#ffaf37"} : {color:"white"}}>
        <li>Kitchen</li>
        </NavLink>
        <NavLink to="/computers" style={({isActive})=> isActive ? {color:"#ffaf37"} : {color:"white"}}>
        <li>Computers</li>
        </NavLink>
        <NavLink to="/ac" style={({isActive})=> isActive ? {color:"#ffaf37"} : {color:"white"}}>
        <li>Ac</li>
        </NavLink>
        <NavLink to="/tv" style={({isActive})=> isActive ? {color:"#ffaf37"} : {color:"white"}}>
        <li>Tv</li> 
        </NavLink>
        <NavLink to="/books" style={({isActive})=> isActive ? {color:"#ffaf37"} : {color:"white"}}>
        <li>Books</li>
        </NavLink>
         <NavLink to="/fridges" style={({isActive})=> isActive ? {color:"#ffaf37"} : {color:"white"}}>
         <li>Fridge</li>
         </NavLink>
         <NavLink to="/furniture" style={({isActive})=> isActive ? {color:"#ffaf37"} : {color:"white"}}>
         <li>Furniture</li>
         </NavLink>                
      </ul>

    </div>
    </>
  )
}

export default Navabar
