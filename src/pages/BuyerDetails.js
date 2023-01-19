import '../css/buyerinfo.css'
import '../css/style.css'
import { Link, useNavigate, useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {placeOrder} from '../slices/PlaceOrderSlice'
import Cheader from '../Components/Cheader'
import Footer from '../Components/Footer'

export function BuyerDetails() {
    const orders = useSelector((state) => state.placeorder.placeorder)
    const [fullname, setFullname] = useState("")
    const [email, setEmail] = useState("")
    const [mobileno, setMobileNo] = useState("")
    const [pincode, setPincode] = useState("")
    const [address, setAddress] = useState("")
    const [area, setArea] = useState("")
    const [landmark, setLandmark] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] = useState("")

    const navigate = useNavigate();
    const [items, setItems] = useState([]);

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('order_details'));
        if (items) {
        setItems(items);
        }
      }, []);

      const dispatch = useDispatch()

    const submitData=()=>{
        let shippinginfo ={
            full_name: fullname,
            email: email,
            contact_no: mobileno,
            zip: pincode,
            address: address,
            area: area,
            landmark: landmark,
            city: city,
            state: state 
    }
    if(shippinginfo.full_name!="" && shippinginfo.email!="" && shippinginfo.contact_no!="" && shippinginfo.zip!="" && shippinginfo.address!="" && shippinginfo.area!="" && shippinginfo.landmark!="" && shippinginfo.city!="" && shippinginfo.state!="")
     {
      var mailformat = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      var phoneno = /^\d{10}$/;
      var pin=/^\d{6}$/;
          if(shippinginfo.contact_no.match(phoneno))
          {
            if(shippinginfo.zip.match(pin))
            {  
               if(shippinginfo.email.match(mailformat))
               {
                  dispatch(placeOrder(items,shippinginfo))
               }else{
                alert("You have entered an invalid email address!")
               }
            }
            else
            {
              alert("Pin code should be 6 digits !")
            }
          }
          else
          {
            alert("You have entered an invalid mobile no!")
          }
     }   
    else{
        alert("Please fill all the Fields")
    }

    }
    return (
        <div>
            <Cheader />

            <div className="fcontainer">
            <div>
                     <div className="delivery-addr">
                        <p>Delivery Address</p>
                     </div>
                    <label>Full Name</label>
                    <input className="inputbox" value={fullname} onChange={(evt)=>setFullname(evt.target.value)} type="text"/>

                    <label>Email Id</label>
                    <input className="inputbox" value={email} onChange={(evt)=>setEmail(evt.target.value)} type="email" pattern=".+@globex\.com" size="30" required/>

                    <label>Mobile number</label>
                    <input className="inputbox" value={mobileno} onChange={(evt)=>setMobileNo(evt.target.value)} type="number"/>

                    <label>PIN code</label>
                    <input className="inputbox" value={pincode} onChange={(evt)=>setPincode(evt.target.value)} type="number"/>

                    <label>Flat, House no., Building name</label>
                    <input className="inputbox" value={address} onChange={(evt)=>setAddress(evt.target.value)} type="text"/>

                    <label>Road name, Area, Colony</label>
                    <input className="inputbox" value={area} onChange={(evt)=>setArea(evt.target.value)} type="text"/>

                    <label>Landmark</label>
                    <input className="inputbox" value={landmark} onChange={(evt)=>setLandmark(evt.target.value)} type="text"/>

                    <label>Town/City</label>
                    <input className="inputbox" value={city} onChange={(evt)=>setCity(evt.target.value)} type="text"/>

                    <label>State</label>
                    <input className="inputbox" value={state} onChange={(evt)=>setState(evt.target.value)} type="text"/>

                    <label for="note">Note: Currenty We are Provinding Cash On Delivery</label>

                    {/* <button onClick={()=>{navigate("/orderconfirmed",{})}} type="submit" className="addrBtn">Submit</button> */}

                    <button onClick={()=> submitData()} type="submit" className="addrBtn">Submit</button>

                 </div>
            </div>

            <Footer />
        </div>
    )
}

