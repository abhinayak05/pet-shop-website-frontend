import React from 'react'
import Footer from '../Components/Footer'
import Vheader from '../Components/Sellerheader'

export function SellerHomepage() {
  const items = JSON.parse(localStorage.getItem('auth._token.local'));
    var userId = items.user_id;
    return (
        <div>
      <div className="header">
      <div className="container">
      <Vheader />
        <div className="row">
          <div className="col-2">
            <h1>
              Be kind to every<br />
              kind that lives!
            </h1>
            <p>
              City Petz shop is one-stop shop for buying Pets, <br />
              Pets Food and Pets Accessories.
            </p>
            <a href="" className="btn">Explore Now &#8594;</a>
          </div>
          <div className="col-2">
            <img src="images/image12.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  
   <Footer/>
  </div>

  
  
    )
}

