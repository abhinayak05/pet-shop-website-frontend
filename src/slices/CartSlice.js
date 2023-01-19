import { createSlice } from "@reduxjs/toolkit";
import { lib } from "../httpClient";
import axios from 'axios'


export const cartslice = createSlice({
    name: "cart",
    initialState: {
        cart: [],
        shippingPrice: 0,
    },
    reducers: {
        setProducts: (state, action) =>{
            state.cart = action.payload[0].products
            state.shippingPrice = action.payload[0].shipping_amount
            console.log(action.payload);debugger
        },
        setOrders: (state, action) =>{
            localStorage.setItem("order_details", JSON.stringify(action.payload));debugger
        },
    }
});

export const {setProducts,setOrders} = cartslice.actions;debugger
export default cartslice.reducer


// Thunks

export const fetchCartProducts = (payload) => {debugger
    return async function fetchCartProducts(dispatch,getState) {
        // const methodUrl = { method: 'POST', url: `/cartitems`};debugger
        // const { data } = await lib.request(methodUrl, payload);debugger
        const methodUrl = 'http://localhost:4000/cartitems'
        const { data } = await axios.post(methodUrl, payload)
        console.log(data.response);debugger
        if(data.status == 200){
            dispatch(setProducts(data.response));debugger
           
        }
    }
}

export const removeProductToCart = (payload) => {debugger
    return async function removeProductToCart(dispatch,getState) {
        // const methodUrl = { method: 'POST', url: `/deleteFromCart`};debugger
        // const { data } = await lib.request(methodUrl, payload);debugger
        const methodUrl = 'http://localhost:4000/deleteFromCart'
        const { data } = await axios.post(methodUrl, payload)
       // console.log(data.response[0].products)
       if(data.status == 200){debugger
        if(!alert("Product Removed From Cart")){
            window.location.reload();
            
        }
    }
    }
}


export const checkCartProductsQuantity = (payload) => {
    return async function checkCartProductsQuantity(dispatch,getState) {
        // const methodUrl = { method: 'POST', url: `/cart/check`}
        // const { data } = await lib.request(methodUrl, payload)
        const methodUrl = 'http://localhost:4000/cart/check'
        const { data } = await axios.post(methodUrl, payload)

        if(data.status == 200)
            {
                // console.log("orders")
                dispatch(setOrders(payload));
                window.location.href = '/BuyerDetails'
            }
        else if(data.status == 300){
            let text = "Oops Sorry !...One of the dish in cart is out of stock";
            window.confirm(text);
    }
    }
}








