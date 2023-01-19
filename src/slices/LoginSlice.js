import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { lib } from "../httpClient";

export const loginslice = createSlice({

    name: "login",
    initialState: {
        login: [],
    },
    reducers: {
        setLogin:(state,action)=>{
            state.login.push(action.payload)
            console.log('Access-Token:'+action.payload.accessToken)
            localStorage.setItem("auth._token.local",JSON.stringify(action.payload))  //generate access token

        },
        setUser:(state,action)=>{
            state.login.push(action.payload)
        }
    }
});

export const {setLogin, setUser} = loginslice.actions;
export default loginslice.reducer

//Thunks

export const saveLoginAction=(payload)=>{
    console.log(payload)
    return async function saveLoginAction(dispatch,getState){
        const methodUrl='http://localhost:4000/login'
        const {data}=await axios.post(methodUrl,payload);debugger
         console.log({data});debugger
        if(data.status===500){debugger
            
                window.location.reload()
                alert('Invalid Credentials')
            
        }else{
            
            if(data.user_type==='Customer'){
                window.location.href='/home'
                // alert('Home')
            }else{
                window.location.href='/sellerhomepage'
                // alert('sellerHome')
            }
            dispatch(setLogin(data));debugger
        }
    }
}

export const saveUserData=(payload)=>{
    return async function saveUserData(dispatch,getState){
        const methodUrl='http://localhost:4000/registration'
        const {data}=await axios.post(methodUrl,payload)
        console.log({data})
        if (data.status === 500) {
            // dispatch(setUser(newPayload))
            if (!alert(data.errorMsg)) { window.location.reload(); }
        } else {
            if (!alert("User Registered Successfully")) { window.location.reload(); }
        }
    }
}