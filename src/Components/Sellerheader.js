import React from 'react'
import { Link} from 'react-router-dom';

function Vheader() {
  const logOut=()=>{
    localStorage.removeItem('auth._token.local');
    localStorage.removeItem('user')
    window.location.href='/'
}
  return (
    <div className="container">
            <div className="navbar">
                <div className="logo">
                <a href="index.html">
                    <img src="images/petfootlogo.png" alt="" width="125px"
                /></a>
                </div>
                <nav>
                <ul id="MenuItems">
                <li><Link to="/sellerhomepage">Home</Link></li>
                <li><Link to="/addproducts">Add Products</Link></li>
                <li><Link to = "/myproducts">My Products</Link></li>
                <li><Link to = "/myorders">My Orders</Link></li>
                <li><Link className="nav-link " onClick={()=>logOut()}>LogOut</Link></li>
                </ul>
                </nav>
                <img
                src="images/menu.png"
                alt=""
                className="menu-icon"
                />
            </div>
    </div> 
  )
}

export default Vheader