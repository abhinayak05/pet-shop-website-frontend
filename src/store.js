import { configureStore } from "@reduxjs/toolkit";
import productReducer from './slices/ProductSlice'
import cartReducer from './slices/CartSlice'
import orderReducer from './slices/OrderSlice'
import loginReducer from './slices/LoginSlice'
import placeOrderReducer from './slices/PlaceOrderSlice'

export default configureStore({
    reducer:{
        login:loginReducer,
        product: productReducer,
        cart:cartReducer,
        order:orderReducer,
        placeorder:placeOrderReducer
    },
})