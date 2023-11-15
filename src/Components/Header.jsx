




import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';


function Header({suleyman}) {
  return (
    <div  className="header">
      <div className='header__left'>
        <MenuIcon/>
        <p>FakeStore</p>
      </div>
      <div>
        <p>Product Count:{suleyman.length}</p>
      </div>
      
    </div>
  )
}


export default Header