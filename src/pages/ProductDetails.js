import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import Cheader from '../Components/Cheader'
import Footer from '../Components/Footer'
import '../css/style.css'
import { addProductToCart, getProductsById } from '../slices/ProductSlice'

export function ProductDetails() {

  const items = JSON.parse(localStorage.getItem('auth._token.local'));
  var userId = items.user_id;
  
  const [quantity,setQuantity]=useState('1')
  
  const location = useLocation();
  var id = location.state;
  const products = useSelector((state) => state.product.products)
  let payload = {
    id: id,
  }
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProductsById(payload))
  }, [])

  const addToCart = (item) => {
    
    let data ={
      user_id: userId,
      product_id: item.id,
      quantity: quantity,
      product_name: item.product_name,
      category_id: item.category_id,
      seller_id: item.seller_id
    }
  console.log(data)
    dispatch(addProductToCart(data))
    }

  return (
    <div>
      <Cheader />
      <div className="small-container single-product">
        <h2>Product Details</h2>
        <div className="row">
          <div className="col-2">
            <img src={"http://localhost:4000/assets/" + id.image_url} width="100%" id="ProductImg" />

          </div>
          <div className="col-2">
            {/* <p>{id.product_type}</p> */}
            <h2>{id.product_name}</h2>
            <p>{(id.pet_gender != "null" ? "Gender: " + id.pet_gender : "Product Type: " + id.product_type)}</p>
            <p>{(id.pet_age != 0 ? "Pet Age: " + id.pet_age : "")}</p>
            <h4>₹{id.product_price}</h4>
            <p>Sold By: {id.seller_name}</p>

            <input type="number" value={quantity} onChange={(evt)=>setQuantity(evt.target.value)}/>
            <button className="btn" onClick={()=>addToCart(id)} >Add to Cart</button>
            <h3>Product Details<i className="fa fa-indent"></i></h3>
            <br />
            <p>
              {id.product_description}
            </p>
          </div>
        </div>
      </div>


      <Footer />
    </div>
  )
}

