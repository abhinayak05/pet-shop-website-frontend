import '../css/buyerinfo.css'
import { useNavigate } from 'react-router-dom'

export function OrderConfirmed(){
    const navigate = useNavigate();
    return(
        <div>
            <div className='cnfrm'>
                <img src="images/order-confirmed.png"/>
            </div>
            <div>
            <button onClick={()=>{navigate("/home",{})}} type="submit" className="tag">Go to home &#8594;</button>
            </div>
        </div>
    )
}