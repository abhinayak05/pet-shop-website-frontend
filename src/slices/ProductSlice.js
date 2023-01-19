import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { lib } from "../httpClient";


export const productSlice = createSlice({
    name: "products",
    initialState: {
        products: [],
        productImageUrl: null
    },
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload
        },
        setProductsBySellerId: (state, action) => {
            state.products = action.payload
        },
        setProductsById: (state, action) => {
            state.products = action.payload
        },
        setProductsByCategory: (state, action) => {
            state.products = action.payload
        },
        setProduct: (state, action) => {
            state.products.push(action.payload)
        },
        setProductImgUrl: (state, action) => {
            state.productImageUrl = action.payload
        },
        updateProduct: (state, action) => {
            const index = state.products.findIndex((item) => item.id === action.payload.id)
            state.products[index] = action.payload
        },
        clearAllStates: (state, action) => {
            state.products = []
            state.productImageUrl = null
        },
        deleteProduct: (state,action) =>{
            const index = state.products.findIndex((item) => item.id === action.payload.id);debugger
            state.products.splice(index,1);debugger
        },
    }
});
            export const { setProducts, setProductsBySellerId, setProduct, setProductsById, setProductsByCategory, setProductImgUrl, updateProduct,deleteProduct,clearAllStates } = productSlice.actions;
export default productSlice.reducer


// Thunks
export const fetchProducts = () => {debugger
    return async function fetchProducts(dispatch, getState) {
        const methodUrl = { method: 'POST', url: '/getProducts' };debugger
        const { data } = await lib.request(methodUrl, {});debugger
        console.log(data.response);debugger
        if (data.status === 200) {
            dispatch(setProducts(data.response));debugger
        }
    }
}

export const getProductBySellerId = (payload) => {
    return async function getProductBySellerId(dispatch, getState) {
        // const methodUrl={method:'POST',url:'/getProductsBySellerId'}
        const methodUrl = 'http://localhost:4000/getProductsBySellerId'
        const { data } = await axios.post(methodUrl, payload)
        console.log(data.response)
        if (data.status === 200) {
            dispatch(setProductsBySellerId(data.response))
        }
    }
}

export const getProductsById = (payload) => {
    return async function getProductsById(dispatch, getState) {
        // const methodUrl={method:'POST',url:'/getProductById'}
        const methodUrl = 'http://localhost:4000/getProductById'
        const { data } = await axios.post(methodUrl, payload)
        console.log(data.response)
        if (data.status === 200) {
            dispatch(setProductsById(data.response))
        }
    }
}


export const fetchProductsByCategoryId = (payload) => {
    console.log('ProductsByCategoryID:', payload)
    console.log(payload); debugger
    return async function fetchProductsByCategoryId(dispatch, getState) {
        // const methodUrl={method:'POST',url:'/getProductsByCategoryId'}
        const methodUrl = 'http://localhost:4000/getProductsByCategoryId'
        console.log(methodUrl); debugger
        const { data } = await axios.post(methodUrl, payload)
        console.log(data.response)
        if (data.status === 200) {
            dispatch(setProductsByCategory(data.response))
        }
    }
}

export const saveProductAction = (payload) => {
    return async function saveProductAction(dispatch, getState) {
        // const methodUrl={method:'POST',url:'/postProduct'}
        const methodUrl = 'http://localhost:4000/postProduct'
        const { data } = await axios.post(methodUrl, payload)
        let newPayload = {
            id: data.response.insertId,
        }; debugger
        console.log(newPayload); debugger
        if (data.status === 200) {
            dispatch(setProduct(newPayload))
            if (!alert("Product Added Successfully")) {
                window.location.reload();
            }
        }
    }
}

export const updateProductAction = (payload) => {
    return async function updateProductAction(dispatch, getState) {
        const methodUrl = { method: 'post', url: '/updateProduct' }
        const { data } = await lib.authRequest(methodUrl, payload)
        console.log(data)
        // let newPayload={
        //     id:payload.id,
        //     product_name:payload.product_name,
        //     pet_gender:payload.pet_gender,
        //     pet_age:payload.pet_age,
        //     category_id:payload.category_id,
        //     product_type:payload.product_type,
        //     product_price:payload.product_price,
        //     product_total_quantity:payload.product_total_quantity,
        //     product_description:payload.product_description
        // }
        console.log("Updated Data:", data)
        if (data.status === 200) {
            dispatch(updateProduct(data))
            if (!alert("Product Updated Successfully")) {
                window.location.href = "/myproducts";

            }
        }
    }
}

export const deleteProductAction = (payload) => {debugger
    return async function deleteProductAction(dispatch, getState) {
        // const methodUrl = { method: 'post', url: '/deleteProduct' };debugger
        const methodUrl = 'http://localhost:4000/deleteProduct';
        const { data } = await axios.post(methodUrl, payload);debugger
        console.log(data, "is deleted");debugger
        if (data.status === 200) {debugger
            if (!alert('Product is Successfully Deleted')) {debugger
                window.location.reload()
            }
        }
    }
}

export const addProductToCart = (payload) => {debugger
    return async function addProductToCart(dispatch,getState){
        // const methodUrl = { method: 'POST', url: `/addToCart`};debugger
        // const { data } = await lib.request(methodUrl, payload);debugger
        const methodUrl = 'http://localhost:4000/addToCart';
        const { data } = await axios.post(methodUrl, payload);debugger
        if(data.status === 300){debugger
            if(!alert("Max Quantity Accepted Is : "+data.response[0].product_total_quantity));debugger
            {
               // window.location.reload();
            }
        }else if(data.status === 400){debugger
            let text = "Product From Another Supplier. Do you wish to switch to this vendor's products?";debugger
            var proceed = window.confirm(text);debugger
            if (proceed) {
                let newPayload = {
                    user_id: payload.user_id,
                    cart_id: data.response[0].cart_id
                };debugger
                 await deleteAllProduct(newPayload,payload)
            } else {
                console.log("don't proceed");
            };debugger
                
        } else{
            if(!alert("Product Added To Cart"))
            {
                //window.location.reload();
            }
        }
    };debugger
}

 const deleteAllProduct = async(newPayload,payload) => {
        // const methodUrl = { method: 'POST', url: `/deleteallcartitem`}
        // const { data } = await lib.request(methodUrl, newPayload)
        const methodUrl = 'http://localhost:4000/deleteallcartitem';
        const { data } = await axios.post(methodUrl, newPayload);debugger
        console.log(data.response)
        if(data.status === 200){
            console.log(payload)
            await addToCart(payload)
           //window.location.reload();  
        }
}

const addToCart = async(newPayload,payload) => {
    // const methodUrl = { method: 'POST', url: `/addToCart`}
    // const { data } = await lib.request(methodUrl, newPayload)
    const methodUrl = 'http://localhost:4000/addToCart';
        const { data } = await axios.post(methodUrl, newPayload);debugger
    if(data.status === 300){
        if(!alert("Max Quantity Accepted Is : "+data.response[0].product_total_quantity)){window.location.reload();}
    }else if(data.status === 400){
        let text = "Product From Another Supplier. Do you wish to switch to this vendor's products?";
        var proceed = window.confirm(text);
        if (proceed) {
            let newPayload = {
                user_id: payload.user_id,
                cart_id: data.response[0].cart_id
            }
             await deleteAllProduct(newPayload,payload)
        } else {
            console.log("don't proceed");
        }
            
    } else{
        if(!alert("Product Added To Cart")){window.location.reload();}
    }
}

export const imageUpload = (formData) => {
    return async function imageUpload(dispatch, getState) {
        const methodUrl = { method: 'post', url: '/upload' }
        const { data } = await lib.uploadRequest(methodUrl, formData)
        if (data.status === 200) {
            dispatch(setProductImgUrl(data.file))
        }
    }
}