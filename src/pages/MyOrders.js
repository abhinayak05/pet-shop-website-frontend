import React,{useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import Footer from '../Components/Footer'
import SellerHeader from '../Components/Sellerheader'
import { fetchSellerOrder } from '../slices/OrderSlice'
import moment from 'moment'


export function MyOrders() {
    const items = JSON.parse(localStorage.getItem('auth._token.local'));
    var userId = items.user_id;
    const orders=useSelector((state)=>state.order.orders)
    let payload={
        user_id:userId
    }
    const dispatch=useDispatch()

    useEffect(()=>{
         dispatch(fetchSellerOrder(payload))
    },[])
    return(
        <div>
            <SellerHeader/>
    
            <div className="small-container cart-page">
            <table>
                <tr>
                <h2>Received Orders</h2><br/>
                </tr>
                <tr>
                <td>
                 {orders.map((item)=> <div key={item.product_id} className="my-order-info">
                    {/* <img className='oimg' src="images/buy-1.jpg" alt="" /> */}
                    <img className='oimg' src={"http://localhost:4000/assets/" + item.product_image} alt=""/>
                    <div><br/>
                        <p>{item.product_name}</p>
                        <small>Price: ₹{item.price}</small>
                        <p className='ptag'>Quantity: {item.quantity}</p>
                        <p className='ptag'>Order no: {item.order_no}</p>
                        <p className='ptag'>Date: {moment(item.date).utc().format('DD-MM-YYYY')}</p>
                        <p className='ptag'  style={{ color: 'blue' }}>Status: {item.status}</p>

                        <Link to ="/orderstatusupdate"  className='btn' state={{order_id: item.order_id, product_id: item.product_id,  order_no: item.order_no, price: item.price, quantity: item.quantity, product_name: item.product_name, product_status: item.status, date: item.date, seller_name: item.seller_name, customer_name: item.full_name, address: item.address, contact_no: item.contact_no, area: item.area, landmark: item.landmark, city: item.city, state: item.state, zip: item.zip}}>Update-Status</Link>
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
