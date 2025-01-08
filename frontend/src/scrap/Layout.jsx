import React  from 'react'
import '../css/layout.css'
function Layout({children}) {
  
  return (
    <div className='layoutContainer'>
      {children}
    </div>
  )
}

export default Layout