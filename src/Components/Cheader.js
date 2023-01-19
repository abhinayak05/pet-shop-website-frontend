import React from 'react'
import $ from 'jquery'
import { Link } from 'react-router-dom';

function Cheader() {
     $('#menuBtn').click(function(){
      $('#MenuItems').show();
     });
     const logOut=()=>{
      localStorage.removeItem('auth._token.local');
      localStorage.removeItem('user')
      window.location.href='/'
  }
  return (
    <div class="container">
      <div class="navbar">
      <div class="logo">
          <Link to="/home">
            <img src="images/petfootlogo.png" alt="" width="125px"
            /></Link>
        </div>
        <nav>
          <ul id="MenuItems">
            <li><Link to="/home">HOME</Link></li>
            <li><Link to="/product">PRODUCTS</Link></li>
            <li><Link to="/orders">ORDERS</Link></li>
            <li><Link to="/trackorder">TRACK</Link></li>
            <li><Link to="/aboutus">ABOUT</Link></li>
            <li><Link className="nav-link " onClick={()=>logOut()}>LogOut</Link></li>
          </ul>
        </nav>
        <Link to="/cart"><img src="images/pet_shop_cart.png" alt="" width="30px" height="30px"/></Link>
        <img
          src="images/menu.png"
          alt=""
          id='menuBtn'
          className="menu-icon"
        />
      </div>
    </div>
  )
}

export default Cheader