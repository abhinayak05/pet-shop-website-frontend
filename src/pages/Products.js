import '../css/style.css'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addProductToCart, fetchProducts } from '../slices/ProductSlice'
import Cheader from '../Components/Cheader'
import Footer from '../Components/Footer'
import { Link } from 'react-router-dom'


export function Products() {
    const items = JSON.parse(localStorage.getItem('auth._token.local'));
    var userId = items.user_id;
    const products=useSelector((state)=>state.product.products);debugger
    const dispatch=useDispatch()
useEffect(()=>{
    dispatch(fetchProducts());debugger
},[])
console.log(products);debugger

const addToCart=(item)=>{
    console.log(item)
    let payload={
        user_id:userId,
        product_id:item.id,
        quantity:'1',
        product_name:item.product_name,
        category_id:item.category_id,
        seller_id:item.seller_id
    }
    console.log(payload)
    dispatch(addProductToCart(payload))
}
    return(
        <div>
            
        <Cheader/>
        <div className="small-container">
            <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="#"><span id="userName">{items.user_name}</span></a>
          <div className="row row-2">
          <h2>All Products</h2>
          </div>
    
          <div className="row">
    
          {products.map((item)=> <div key={item.id} className="col-4">
                   <Link to={"/productdetails"} state={item.id}>
                   <img src={"http://localhost:4000/assets/" + item.image_url} alt=""/>
                   
                    <h3>{item.product_name}</h3>
                    <h4>Type: {item.product_type}</h4>
                    <h4>Price: ₹{item.product_price}</h4>
                    <h4>Sold By: {item.seller_name}</h4>
                    </Link>
                     <button onClick={()=>addToCart(item)}  className="sbtn">Add to cart</button>
               </div>)}
          </div>
    
          <div className="page-btn">
        
          </div>
        </div>
    
       <Footer/>
        </div>
        )
}

