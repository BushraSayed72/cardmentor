import React from 'react';
import logo from '../images/logo.svg';

function Navbar() {
  return (
    <div className='navbar'>
    <div className='left-side'>
   <p className='balance'>My balance</p>
   <p className='dollar'>$921.48</p>
   </div>
   <div className='right-side'>
    <img  className='logo' src={logo} alt='logo'/>
   </div>

    </div>
  )
}

export default Navbar
