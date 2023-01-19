import '../css/style.css'
import { Link, NavLink } from 'react-router-dom'

import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Footer from '../Components/Footer'
import Cheader from '../Components/Cheader'
import { fetchOrders } from '../slices/OrderSlice'

export function TrackOrders() {
    const items = JSON.parse(localStorage.getItem('auth._token.local'));
  var userId = items.user_id;

    const orders=useSelector((state)=>state.order.orders)

    
    let payload ={
        user_id: userId
      }
    const dispatch=useDispatch()

    useEffect(()=>{
      dispatch(fetchOrders(payload))
    },[])
    return(
        <div>
           <Cheader/>
            <div className="small-container cart-page">
            <table>
                <tr>
                <h2>Track Orders</h2><br/>
                </tr>
                <tr>
                <td>
                 {orders.map((item)=> <div key={item.product_id} className="order-info">
                    {/* <img src="images/buy-1.jpg" alt="" /> */}
                    <img src={"http://localhost:4000/assets/" + item.product_image} alt=""/>
                    <div>
                        <p>{item.product_name}</p>
                        <small>Price: ₹{item.price}</small>
                        <br />
                        <Link to ="/orderstatus" state={{order_id: item.order_id, product_id: item.product_id}}>Track-order</Link>
                    </div>
                    </div>)}
                </td>
                </tr>
                
            </table>

         
            </div>
          
           
        <Footer/>
        </div>
    )
}
