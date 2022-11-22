import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/logo.png';

function Navbar() {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="links">
          <Link className='link' to="/?cat=art"><h6>CINEMA</h6></Link>
          <Link className='link' to="/?cat=art"><h6>DIGITAL ART</h6></Link>
          <Link className='link' to="/?cat=art"><h6>TECHNOLOGY</h6></Link>
          <Link className='link' to="/?cat=art"><h6>GAME</h6></Link>
          <span>Mog</span>
          <span>Logout</span>
          <span className='write'>
            <Link className="link" to="/write">Write</Link>
          </span>
        </div>

      </div>
    </div>
  )
}

export default Navbar