import { createSlice } from "@reduxjs/toolkit";
import { lib } from "../httpClient";
import axios from 'axios'


export const placeorderslice = createSlice({
    name: "placeorder",
    initialState: {
        placeorder: []
    },
    reducers: {
        setProducts: (state, action) =>{
            state.placeorder = action.payload
            console.log(action.payload)
        }
    }
});
export const {setProducts} = placeorderslice.actions;
export default placeorderslice.reducer

//thunks


export const placeOrder=(payload,shippinginfo)=>{
   return async function placeOrder(dispatch,getState){
    // const methodUrl = { method: 'POST', url: `/addOrder`}
    // const { data } = await lib.request(methodUrl, payload)
    const methodUrl = 'http://localhost:4000/addOrder'
        const { data } = await axios.post(methodUrl, payload)
    if(data.status == 200){
        let newPayload = {
            order_id: data.response[0].order_id,
            full_name: shippinginfo.full_name,
            email: shippinginfo.email,
            contact_no: shippinginfo.contact_no,
            zip: shippinginfo.zip,
            address: shippinginfo.address,
            area: shippinginfo.area,
            landmark: shippinginfo.landmark,
            city: shippinginfo.city,
            state: shippinginfo.state 
        }
        await addShippingAddress(newPayload)
    }
  }
}

export const addShippingAddress=async(newPayload)=>{
    // const methodUrl = { method: 'POST', url: `/shippingAddress`}
    // const { data } = await lib.request(methodUrl, newPayload)
    const methodUrl = 'http://localhost:4000/shippingAddress'
        const { data } = await axios.post(methodUrl, newPayload)
    console.log(data)
    if(data.status == 200){
        window.location.href = '/orderconfirmed'
    }
}