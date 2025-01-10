import React from 'react'
import '../css/scrapitems.css'
import img from './images/bgremoved(1).png'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

function ScrapItems() {
 const handleClick=()=>{
  window.open(`https://wa.me/${916235572660}`)

 } 
  return (
      <div className='scrapContainer'>
        <div className="scrapTextBox">
          <h1>Recycle your <span>scrap</span>  with us <span>!</span></h1>
          <p className='scrapContent'>
            Chooose a convinient time ,and our team will collect the scrap from the doorstep. As 
            expert in scrap management, we promote responsible recycling, helping you
            declutter and contribute to a sustainable future.
         </p>        
         </div>
         <div className="imageContainer">
          <img src={img} alt="" />
        </div>
        <WhatsAppIcon className='icon'
        onClick={handleClick}
         sx={{
          fontSize: {
            xs: 80,   // 30px on extra small screens
            sm: 80,   // 50px on small screens
            md: 90,   
          },color:'#fff',
          bgcolor:'green',p:2
        }}/>
      </div>
      
  )
}

export default ScrapItems