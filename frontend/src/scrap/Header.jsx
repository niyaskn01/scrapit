import React, { useEffect, useState } from 'react'
import '../css/header.css'
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import CloseIcon from '@mui/icons-material/Close';

function Header() {
  const navigate=useNavigate()
  const handleClick=()=>{
    navigate('/')
  }
  const [showMenuBox,setShowMenuBox]=useState(false)
  const [loc,setLoc]=useState('')
  const location=useLocation()
  useEffect(()=>{
    setLoc(location)
  },[location])
  return (
    <>
    <div className='header'>
      <div className="left">
        <span className="logo"
        onClick={handleClick}
        >ScrapIt</span>
      </div>
      <div className="right">
        <div className="menuList">
          <NavLink className='menuItems' to='/' >Home</NavLink>
          <NavLink className='menuItems' to='/about' >About</NavLink>
          <NavLink className='menuItems' to='/contact' >Contact Us</NavLink>
        </div>
        <div className="menuBar">
          {
            showMenuBox ? 
            <CloseIcon sx={{color:'rgb(137, 237, 189)',cursor:'pointer',fontSize: {
              xs: 40,   // 30px on extra small screens
              sm: 50,   // 50px on small screens
              md: 60,   
            }}} onClick={()=>setShowMenuBox(!showMenuBox)} alt="" /> 
            :
            <MenuOpenIcon sx={{color:'rgb(137, 237, 189)',cursor:'pointer',fontSize: {
              xs: 40,   // 30px on extra small screens
              sm: 50,   // 50px on small screens
              md: 60,   
            }}} onClick={()=>setShowMenuBox(!showMenuBox)} alt="" />
          }
          
        </div>
      </div>
      {
        showMenuBox && 
        <div className="menuBox">
        <NavLink className='menuItems' to='/' >Home</NavLink>
        <NavLink className='menuItems' to='/about' >About</NavLink>
        <NavLink className='menuItems' to='/contact' >Contact Us</NavLink>
      </div>
      }
    </div>
    {
      loc.pathname !=='/contact' &&
      <div className="bottomHeader">
        <div className="left">+91 6235572660</div>
        <div className="right">scrapit123@gmail.com</div>
      </div>
    }
    
    </>
  )
}

export default Header