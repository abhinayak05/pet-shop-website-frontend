import React from 'react'

function Footer() {
  return (
    <div className="footer">
    <div className="container">
        <div className="row">
        <div className="footer-col-1">
            <h3>Our Website</h3>
            <p>
            Pets are at the heart of everything we do here, they make our lives whole. With each collection, we do our best to honour them. Stay in touch to receive special offers and insider information about upcoming collections.
            </p>
        </div>  
        <div className="footer-col-2">
            <img src="images/logo.png" alt="" />
            <p>
            City Petz shop is one-stop shop for buying Pets, <br />
            Pets Food and Pets Accessories.
            </p>
        </div>
        <div className="footer-col-3">
            <h3>Online Shopping</h3>
            <ul>
            <li>Small Animals</li>
            <li>Pets Food</li>
            <li>Accessories</li>
            </ul>
        </div>

        <div className="footer-col-4">
            <h3>Contact us</h3>
            <ul>
            <li>Email: petshop@gmail.com</li>
            <li>Contact: +918310571419</li>
            </ul>
        </div>
        </div>
        <hr />
        <p className="copyright">Copyright 2022 - Almon Technologies</p>
    </div>
    </div>
  )
}

export default Footer