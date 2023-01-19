import '../css/buyerinfo.css'
import '../css/style.css'
import { Link, useLocation} from 'react-router-dom';

import React,{ useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Footer from '../Components/Footer'
import { updateProductAction } from '../slices/ProductSlice';

export function UpdateProducts() {
    const items=JSON.parse(localStorage.getItem('auth._token.local'));
    var userId=items.user_id;

    const location=useLocation();
    const products = useSelector((state) => state.product.products)
    const [productid,setProductid]=useState("");
    const [productname, setProductname] = useState("")
    var [productgender, setProductgender] = useState("")
    var [petage, setPetage] = useState("")
    const [petcategory, setPetcategory] = useState("")
    const [producttype, setProducttype] = useState("")
    const [productprice, setProductprice] = useState("")
    const [productquantity, setProductquantity] = useState("")
    const [productsdesc, setProductdesc] = useState("")

    const dispatch = useDispatch();
    
    useEffect(() => {
       // dispatch(getProductById(payload))
       setProductid(location.state.id)
       setProductname(location.state.product_name)
       setProductgender(location.state.pet_gender)
       setPetage(location.state.pet_age)
       setPetcategory(location.state.category_id)
       setProducttype(location.state.product_type)
       setProductprice(location.state.product_price)
       setProductquantity(location.state.product_total_quantity)
       setProductdesc(location.state.product_description)
    },[])

    const updateData=()=>{
        if(petcategory==='2' && petcategory==='3'){
            productgender='null';
            petage='0';
        }else if(petcategory==='1'&& productgender==='null'){
            productgender='Male';
            petage='0'
        }

        let productinfo={
           id:productid,
           seller_id:userId,
           product_name:productname,
           pet_gender:productgender,
           pet_age:petage,
           category_id:petcategory,
           product_type:producttype,
           product_price:productprice,
           product_total_quantity:productquantity,
           product_description:productsdesc
        }
        console.log(productinfo)
        if(productinfo.product_name!=="" && productinfo.pet_gender!=="" && productinfo.pet_age!=="" && productinfo.category_id!=="" && productinfo.product_type!=="" && productinfo.product_price!=="" && productinfo.product_total_quantity!=="" && productinfo.product_description!==""){
           dispatch(updateProductAction(productinfo))
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
                <nav>
                <ul id="MenuItems">
                </ul>
                </nav>
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
                        <p>Update Product</p>
                     </div>
                    <label>Product Name</label>
                    <input className="inputbox" value={productname} onChange={(evt)=>{setProductname(evt.target.value)}}  type="text" placeholder='Pet name'/>

                    <label>Pet Gender</label>
                        <select className="inputbox" value={productgender} onChange={(evt)=>{setProductgender(evt.target.value)}}>
                            <option value='Male'>Male</option>
                            <option value='Female'>Female</option>
                            <option value='None'>None</option>
                        </select>
                    
                    <label>Pet Age</label>
                    <input className="inputbox" value={petage} onChange={(evt)=>{setPetage(evt.target.value)}} type="number" placeholder='Pet age'/>

                    <label>Pet Category</label>
                    <select className="inputbox" value={petcategory} onChange={(evt)=>{setPetcategory(evt.target.value)}}>
                            <option value='1'>1 - Pet</option>
                            <option value='2'>2 - Food</option>
                            <option value='3'>3 - Accessories</option>
                        </select>

                    <label>Product Type</label>
                    <input className="inputbox" value={producttype} onChange={(evt)=>{setProducttype(evt.target.value)}}  type="text" placeholder='Eg. Cat or Food or Accessories'/>

                    <label>Product Price</label>
                    <input className="inputbox" value={productprice} onChange={(evt)=>{setProductprice(evt.target.value)}} type="number" placeholder='Pet Price'/>

                    <label>Product Total Quantity</label>
                    <input className="inputbox" value={productquantity} onChange={(evt)=>{setProductquantity(evt.target.value)}}  type="number" placeholder='Pet total quantity'/>

                    <label>Product Description</label>
                    <input className="inputbox" value={productsdesc} onChange={(evt)=>{setProductdesc(evt.target.value)}} type="text" placeholder='Description about product'/>

                    {/* <button onClick={()=>{navigate("/orderconfirmed",{})}} type="submit" className="addrBtn">Submit</button> */}

                    <button type="submit" className="addrBtn" onClick={()=>updateData()}>Update Product</button>

                 </div>
            </div>
                        

              <Footer/>
        </div>
    )
}