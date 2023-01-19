import '../css/style.css'
import '../css/about.css'
import { Link, useLocation } from 'react-router-dom'

import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {fetchOrderStatus} from '../slices/OrderSlice'
import Cheader from '../Components/Cheader';
import Footer from '../Components/Footer'

export function OrderStatus(){
  const location = useLocation();
  var order_id = location.state.order_id;
  var product_id = location.state.product_id;

  const orderstatus = useSelector((state) => state.order.orderstatus)

  var status;
  if(orderstatus == "Ordered"){
   status = "Your Order has been placed successfully"
   }else if(orderstatus == "Shipped"){
    status = "Your Order has been shipped successfully"
   }else if(orderstatus == "Out_for_delivery"){
    status = "Your order is out for delivery"
   }else if(orderstatus == "Order_delivered"){
    status = "Your order has been delivered"
   }else if(orderstatus == "Cancelled"){
    status = "Your order has been cancelled"
   }

  let payload ={
    order_id: order_id,
    product_id: product_id
  }

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchOrderStatus(payload))
  },[])

    return(
        <div>
            <Cheader/>

            <div class="track-section">
                <img style={{width:'100%'}} src="images/track-order-banner.jpg"></img>
            </div>

            <div class="order-status">
            <p>{status}</p><br/>
            </div>
           
         <Footer/>
        </div>
    )
}