import React from 'react'
import { Link} from 'react-router-dom';
import '../css/style.css'

function LoginRegHeader() {
  return ( 
  
  <div className="header">
  <div className="container">
      <div className="navbar">
      <div className="logo">
          <img src="images/petfootlogo.png" alt="" width="125px"
          />
      </div>
      <p className='websiteName'>PetSHOP</p>
      <nav>
          <ul id="MenuItems">
          <li><Link to="/">Login</Link></li>
          <li><Link to="/register"  state={"Customer"}>Customer Registration</Link> </li>
          <li><Link to="/register" state={"Seller"}>Seller Registration</Link> </li>
          </ul>
      </nav>
     
      <img
          src="images/menu.png"
          alt=""
          className="menu-icon"
          // onClick="menutoggle()"
      />
      </div>
  </div>
  </div>
  )
}

export default LoginRegHeader