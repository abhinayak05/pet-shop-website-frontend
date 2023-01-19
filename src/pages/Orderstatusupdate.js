import '../css/buyerinfo.css'
import '../css/style.css'
import { Link, useLocation} from 'react-router-dom';
import moment from "moment";

import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {updateProductStatus} from '../slices/OrderSlice'
import Footer from '../Components/Footer'

export function OrderStatusUpdate() {
    const items = JSON.parse(localStorage.getItem('auth._token.local'));
    var userId = items.user_id;

    const location = useLocation();
    var order_id = location.state.order_id;
    var product_id = location.state.product_id;
    var order_no = location.state.order_no;
    var price = location.state.price;
    var quantity = location.state.quantity;
    var product_name = location.state.product_name;
    var product_status = location.state.product_status;
    var date = location.state.date;
    var seller_name = location.state.seller_name;
    var customer_name = location.state.customer_name;
    var address = location.state.address;
    var contact_no = location.state.contact_no;
    var area = location.state.area;
    var landmark = location.state.landmark;
    var city = location.state.city;
    var state = location.state.state;
    var zip = location.state.zip;
    console.log(date)
    
    var [productstatus, setProductStatus] = useState(product_status)
    const dispatch = useDispatch()
    const submitData = () => {
        let statusupdate ={
          order_id: order_id,
          product_id: product_id,
          product_status: productstatus
      }
  
      console.log(statusupdate)
  
      if(statusupdate.order_id!="" && statusupdate.product_id!="" && statusupdate.product_status!="" )
       {
          dispatch(updateProductStatus(statusupdate))
       }   
      else{
          alert("Something went wrong!")
      }
  
      }

    return(
        <div>
   <div className="container">
            <div className="navbar">
                <div className="logo">
                <a href="index.html">
                    <img src="images/logo.png" alt="" width="125px"
                /></a>
                </div>
                <img
                src="images/menu.png"
                alt=""
                className="menu-icon"
                />
            </div>
            </div>          
              <div className="fcontainer">
                <div>
                     <div className="delivery-addr">
                        <p>Ordered Product</p>
                     </div>
                    <p>Order no: {order_no}</p><br/>

                    <p>Order date: {moment(date).utc().format('DD-MM-YYYY')}</p><br/>

                    <p>Product name: {product_name}</p><br/>
                    
                    <p>Product Price: ₹{price}</p><br/>
                
                    <p>Quantity: {quantity}</p><br/>
                   
                    <p>Customer name: {customer_name}</p><br/>

                    <p>Contact no: {contact_no}</p><br/>
                   
                    <p>Address: {address} ,{area}</p><br/>

                    <p>Landmark: {landmark}</p><br/>

                    <p>City: {city}</p><br/>

                    <p>State: {state}</p><br/>
                   
                    <p>Pincode: {zip}</p><br/>

                    <label>Set Product Status  </label>
                        <select  value={productstatus} onChange={(evt)=>setProductStatus(evt.target.value)}>
                            <option value='Ordered '>Ordered </option>
                            <option value='Shipped'>Shipped</option>
                            <option value='Out_for_delivery'>Out for delivery</option>
                            <option value='Order_delivered'>Order delivered</option>
                            <option value='Cancelled'>Cancelled</option>
                        </select>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                   
                    {/* <button onClick={()=>{navigate("/orderconfirmed",{})}} type="submit" className="addrBtn">Submit</button> */}

                    <button onClick={()=> submitData()} type="submit" className="btn">Update Status</button>

                 </div>
            </div>          

               <Footer/>
        </div>
    )
}