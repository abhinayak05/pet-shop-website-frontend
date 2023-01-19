
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Login } from './pages/Login';
import {Register} from './pages/Register';
import {Home} from './pages/Home';
import {Products} from './pages/Products';
import {Cart} from './pages/Cart';
import {Orders} from './pages/Orders';
import {SellerHomepage} from './pages/SellerHomepage';
import {AddProducts} from './pages/AddProducts';
import {MyProducts} from './pages/MyProducts';
import {MyOrders} from './pages/MyOrders';
import {ProductDetails} from './pages/ProductDetails';
import {ProductByCategory} from './pages/ProductByCategory';
import {BuyerDetails} from './pages/BuyerDetails'
import {TrackOrders} from './pages/TrackOrders';
import { OrderStatus } from './pages/Orderstatus';
import { OrderConfirmed } from './pages/Orderconfirmed';
import { OrderStatusUpdate } from './pages/Orderstatusupdate';
import { UpdateProducts } from './pages/Updateproducts';
import { AboutUs } from './pages/About';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/aboutus" element={<AboutUs/>} />
          <Route path='register' element={<Register/>}/>
          <Route path='home'element={<Home/>}/>
          <Route path='product' element={<Products/>}/>
          <Route path="productdetails" element={<ProductDetails/>}/>
          <Route path="productbycategory" element={<ProductByCategory/>}/>
          <Route path="cart" element={<Cart/>}/>
          <Route path="buyerdetails" element={<BuyerDetails/>}/>
          <Route path="orders" element={<Orders/>}/>
          <Route path="trackorder" element={<TrackOrders/>}/>
          <Route path="orderstatus" element={<OrderStatus/>}/>
          <Route path="orderconfirmed" element={<OrderConfirmed/>}/>
          <Route path="sellerhomepage" element={<SellerHomepage />}/>
          <Route path="addproducts" element={<AddProducts/>}/>
          <Route path="myproducts" element={<MyProducts/>}/>
          <Route path="myorders" element={<MyOrders/>}/>
          <Route path="orderstatusupdate" element={<OrderStatusUpdate/>}/>
          <Route path="updateproducts" element={<UpdateProducts/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
