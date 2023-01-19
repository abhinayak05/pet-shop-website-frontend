import React,{useEffect} from 'react'
import '../css/style.css'
import { Link } from 'react-router-dom'
import { fetchOrders } from '../slices/OrderSlice'
import Footer from '../Components/Footer'
import Cheader from '../Components/Cheader'
import { useSelector,useDispatch } from 'react-redux'

export function Orders() {
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
                <h2>My Orders</h2><br/>
                </tr>
                <tr>
                <td>
                {orders.map((item)=> <div key={item.product_id} className="order-info">
                  
                  <img src={"http://localhost:4000/assets/" + item.product_image} alt=""/>

                    <div>
                        <p>{item.product_name}</p>
                        <small>Price: ₹{item.price}</small>
                        <br />
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

