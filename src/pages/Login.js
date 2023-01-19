import '../css/style.css'

import Header from '../Components/LoginRegHeader'
import { Link, useNavigate } from 'react-router-dom';
import React,{useEffect,useState} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { saveLoginAction } from '../slices/LoginSlice';
import Footer from '../Components/Footer';

export function Login(){
    const navigate=useNavigate()

    const loginData=useSelector((state)=>state.login.login);debugger
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')

    const dispatch=useDispatch()

    const attemptLogin=()=>{
        let payload={
            user_name:username,
            password:password
        }
        console.log(payload);debugger
        var mailformat =/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        if(payload.user_name!=='' && payload.password!==''){debugger
            if(payload.user_name.match(mailformat)){debugger
                dispatch(saveLoginAction(payload));debugger
            }else{
                alert("You have entered an invalid email address!")
            }
        }else{
            alert("Please fill all the Fields")
        }
    }
     return(
        <div>
           <Header/>
                <div className="account-page">
                <div className="container">
                    <div className="row">
                    <div className="col-2">
                        <div className="form-container">
                        <div className="form-btn">
                            <span>Login</span>
                         
                            <hr id="indicator" />
                        </div>
                        <div action="" className="formContainer" id="LoginForm">
                            <input value={username} onChange={(evt)=>setUsername(evt.target.value)}  type="email" placeholder="Email Id" />
                            <input value={password} onChange={(evt)=>setPassword(evt.target.value)} type="password" placeholder="Password" />

                            {/* <button onClick={()=>{navigate("/home",{})}} type="submit" className="btn">Login</button> */}
                            <button type="submit" className="btn" onClick={()=>attemptLogin()}>Login</button>
                            {/* <a href="">Forgot Password</a> */}
                        </div>
                        </div>
                    </div>
                    <div className="col-2">
                        <img src="images/pet_shop_logo.png" width="60%" />
                    </div>
                    </div>
                </div>
                </div>

            <Footer/>
        </div>
    )
}