import { createSlice } from "@reduxjs/toolkit";
import { lib } from "../httpClient";
import axios from "axios";


export const orderSlice = createSlice({
    name: "orders",
    initialState: {
        orders: [],
        orderstatus: [],
    },
    reducers: {
        setOrders: (state, action) =>{
            state.orders=action.payload
        },
        setSellerOrders:(state,action)=>{
            state.orders=action.payload
        },
        setOrderstatus: (state, action) =>{
            state.orderstatus = action.payload[0].status
        },
    }
});

export const {setOrders,setSellerOrders,setOrderstatus} = orderSlice.actions;
export default orderSlice.reducer

//Thunks
export const fetchOrders=(payload)=>{
    return async function fetchOrders(dispatch,getState){
        // const methodUrl={method:'POST',url:'/getOrder'}
        // const {data}=await lib.request(methodUrl,payload)
        const methodUrl = 'http://localhost:4000/getOrder'
        const { data } = await axios.post(methodUrl, payload)
        console.log(data.response)
        if(data.status===200){
            dispatch(setOrders(data.response))
        }
    }
}

export const fetchSellerOrder=(payload)=>{
    return async function fetchSellerOrder(dispatch,getState){
        // const methodUrl={method:'POST',url:'/getSellerOrder'}
        // const {data}=await lib.request(methodUrl,payload)
        const methodUrl = 'http://localhost:4000/getSellerOrder'
        const { data } = await axios.post(methodUrl, payload)
        console.log(data.response)
        if(data.status===200){
            dispatch(setSellerOrders(data.response))
        }
    }
}
export const updateProductStatus = (payload) => {
    return async function updateProductStatus(dispatch,getState) {
        // const methodUrl = { method: 'POST', url: `/updateProductStatus` }
        // const { data } = await lib.request(methodUrl,payload)
        const methodUrl = 'http://localhost:4000/updateProductStatus'
        const { data } = await axios.post(methodUrl, payload)
        console.log(data.response)
        if(data.status == 200){
           // dispatch(setSellerOrders(data.response))
           if(!alert("Product Status Updated"))
           {
            //window.location.reload();
           }
        }
    }
}

export const fetchOrderStatus = (payload) => {
    // console.log(payload)
     return async function fetchOrderStatus(dispatch,getState) {
        //  const methodUrl = { method: 'POST', url: `/getOrderById` }
        //  const { data } = await lib.request(methodUrl,payload)
        const methodUrl = 'http://localhost:4000/getOrderById'
        const { data } = await axios.post(methodUrl, payload)
         console.log(data.response)
         if(data.status == 200){
             dispatch(setOrderstatus(data.response))
            
         }
     }
 }