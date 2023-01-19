import React from 'react'
import '../css/style.css'
import { Link } from 'react-router-dom'
import Cheader from '../Components/Cheader'
import Footer from '../Components/Footer'



export function Home() {
  const items = JSON.parse(localStorage.getItem('auth._token.local'));
    var userId = items.user_id;
    return (
        <div>

      <div className="header">
      <div className="container">
      <Cheader/>
        <div className="row">
          <div className="col-2">
            <img src="images/petsBg1.png" alt="" />
          </div>
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
        </div>
      </div>
    </div>
    
    <div className="categories">
      <div className="small-container">
          <h2 className="title">Featured Categories</h2>
        <div className="row">
          <div className="col-3">
          <Link to={"/productbycategory"} data-toggle="tooltip" title="Pets" state={"1"}>
            <img src="images/category-1.jpg" alt="" />
            </Link>
          </div>
          <div className="col-3">
          <Link to={"/productbycategory"} data-toggle="tooltip" title="Foods" state={"2"}>
            <img src="images/category-2.jpg" alt="" />
            </Link>
          </div>
          <div className="col-3">
          <Link to={"/productbycategory"} data-toggle="tooltip" title="Care And Accessories" state={"3"}>
            <img src="images/category-3.jpg" alt="" />
            </Link>
          </div>
        </div>
      </div>
    </div>
   
    <div className="offer">
      <div className="small-container">
        <div className="row">
          <div className="col-2">
            <img src="images/image1.png" className="offer-img" alt="" />
          </div>
          <div className="col-2">
            <p>Exclusively available on Pet Store</p>
            <h1>ADOPT! Give Them Home</h1>
            <small>Show your love , Let's be friends. All they need is love.
            </small><br/>
            <Link to={'/product'} className="btn" >Buy Now &#8594;</Link>
          </div>
        </div>
      </div>
    </div>

  <Footer/>
  </div>
    )
}
