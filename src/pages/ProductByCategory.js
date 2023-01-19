import '../css/style.css'
import { Link, useLocation} from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Footer from '../Components/Footer';
import Cheader from '../Components/Cheader';
import { fetchProductsByCategoryId,addProductToCart } from '../slices/ProductSlice';

export function ProductByCategory() {
   const items=JSON.parse(localStorage.getItem('auth._token.local'))
   var userId=items.user_id;
    const location=useLocation()
    var id=location.state
    let payload={
        id:id,
    }
    const pCategory=useSelector((state)=>state.product.products)
    console.log(pCategory)
    const dispatch=useDispatch()
    useEffect(()=>{
         dispatch(fetchProductsByCategoryId(payload))
    },[])

    const addToCart=(item)=>{
       let data={
        user_id:userId,
        product_id:item.id,
        quantity:'1',
        product_name:item.product_name,
        category_id:item.category_id,
        seller_id:item.seller_id
       }

       dispatch(addProductToCart(data))
    }
    return(
        <div>
        <Cheader/>
    
        <div className="small-container">
          <div className="row row-2">
          <h2>All Products</h2>
          </div>
    
          <div className="row">
    
          {pCategory.map((item)=> <div key={item.id} className="col-4">
          <div className="row row-2">
          <h2>{item.name}</h2>
          </div>
                   <Link to={"/productdetails"} state={item.id}>
                   <img src={"http://localhost:4000/assets/" + item.image_url} alt=""/>
                   </Link>
                    <h3>{item.product_name}</h3>
                    <h4>Type: {item.product_type}</h4>
                    <h4>Price: ₹{item.product_price}</h4>
                    <h4>Sold By: {item.seller_name}</h4>
                   
                     <button  className="sbtn" onClick={()=>addToCart(item)}>Add to cart</button>
               </div>)}
    
          </div>
    
          <div className="page-btn">
            {/* <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>&#8594;</span> */}
          </div>
        </div>
    
       <Footer/>
        </div>
        )
}

