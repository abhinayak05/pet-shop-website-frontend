import '../css/style.css'
import { Link } from 'react-router-dom'

import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {checkCartProductsQuantity, fetchCartProducts, removeProductToCart,} from '../slices/CartSlice'
import Cheader from '../Components/Cheader'
import Footer from '../Components/Footer'

export function Cart(){
    const items = JSON.parse(localStorage.getItem('auth._token.local'));
    var userId = items.user_id;
  
    const cartProducts = useSelector((state) => state.cart.cart)
    var shipping = useSelector((state) => state.cart.shippingPrice)
   
  
    var stotal = 0, total=0 , tax_amount=0;
      for (let i = 0; i < cartProducts.length; i++) {
          stotal += cartProducts[i].product_price * cartProducts[i].quantity;
      }
  
    total = stotal + shipping;
  
    let payload ={
      user_id: userId,  
    }
  
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(fetchCartProducts(payload))
    },[])
  
    const removeFromCart = (item) => {
      let payload ={
        user_id: userId,
        product_id: item.product_id,
      }
    dispatch(removeProductToCart(payload))
    }
  
    const checkCart = () => {
      
      let data ={
        user_id: userId,
        cart_id : cartProducts[0].cart_id,
        seller_id:  cartProducts[0].seller_id,
        total_price : stotal,
        shipping_price : shipping,
        tax_amount : tax_amount,
        grand_price: total
        
      }
      console.log(data)
      dispatch(checkCartProductsQuantity(data))
      }
  
      return(
          <div>
              <Cheader/>
      
              <div className="small-container cart-page">
              <table>
                  <tr>
                  <th>Product</th>
                  <th>Quantity</th>
                  <th>Subtotal</th>
                  </tr>
                  
                  <tr>
                  <td>
                  {cartProducts.map((item)=> <div key={item.id} className="cart-info">
                      {/* <img src="images/buy-1.jpg" alt="" /> */}
                      <img src={"http://localhost:4000/assets/" + item.product_images[0]} alt=""/>
                      <div>
                          <p>{item.product_name}</p>
                          <small>Price: ₹{item.product_price}</small>
                          <br />
                          <button className="cbtn" href="" onClick={()=> removeFromCart(item)}>Remove</button>
                      </div>
                      </div>)}
                  </td>
                 
                   <td> {cartProducts.map((item)=> <div key={item.id} className="table"> {item.quantity} </div>)} </td>
                   <td>{cartProducts.map((item)=> <div  key={item.id} className="table">₹{item.product_price} </div>)}</td>
                 
                  </tr>
  
              </table>
  
              <div className="total-price">
                  <table>
                  <tr>
                      <td>Subtotal</td>
                      <td>₹{stotal}</td>
                  </tr>
                  <tr>
                      <td>Shipping</td>
                      <td>₹{shipping}</td>
                  </tr>
                  <tr>
                      <td>Total</td>
                      <td>₹{total}</td>
                  </tr>
                  </table>
              </div>
              </div>
            
              <div className="proceedBtn">
              {/* <Link to ="/buyerdetails" className="btn">Proceed &#8594;</Link> */}
              <button className="btn" onClick={()=> checkCart()}>Proceed &#8594;</button>
              </div>
  
  
           <Footer/>
          </div>
      )
  }