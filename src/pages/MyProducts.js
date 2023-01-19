import React,{useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import Footer from '../Components/Footer'
import Sellerheader from '../Components/Sellerheader'
import { clearAllStates, deleteProductAction, getProductBySellerId } from '../slices/ProductSlice'


export function MyProducts() {
  const items = JSON.parse(localStorage.getItem('auth._token.local'));
    var userId = items.user_id;
    const products=useSelector((state)=>state.product.products)

    let payload={
      id:userId,
    }
    const dispatch=useDispatch()

    useEffect(()=>{
       if(products.length===0){debugger
        dispatch(getProductBySellerId(payload));debugger
       }

       return (()=> {
        dispatch(clearAllStates())
        console.log("clear All Stages")
      })

    },[]);debugger

    const deleteProduct=(item)=>{debugger
      let payload={
        id:item.id
      }
      console.log(payload);debugger
      dispatch(deleteProductAction(payload));debugger
    }
    return(
        <div>
          <Sellerheader/>
  
      <div className="small-container">
        
        <div className="row row-2">
        <h2>All Products</h2>
        </div>
  
        <div className="row">
  
        {products.map((item)=> <div key={item.id} className="col-4">
        
        <img src={"http://localhost:4000/assets/" + item.image_url} alt=""/>
                 {/* <img src="images/product-1.jpg" alt=""/> */}
                  <h3>{item.product_name}</h3>
                  <h4>Type: {item.product_type}</h4>
                  <h4>Price: ₹{item.product_price}</h4>
                  <h4>Sold By: {item.seller_name}</h4>
                  
                  <Link to ="/updateproducts" state={item} className="sbtn">Edit</Link>
                   <button onClick={()=>deleteProduct(item)} className="sbtn">Delete</button>
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
