import React,{useEffect,useState} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { useLocation } from 'react-router-dom'
import Footer from '../Components/Footer'
import LoginRegHeader from '../Components/LoginRegHeader'
import { saveUserData } from '../slices/LoginSlice'

export function Register() {
    const loginData=useSelector((state)=>state.login.login)
    const [fullname, setFullname] = useState("")
    const [contact, setContact] = useState("")
    const [username, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const location=useLocation();

    var user_type=location.state
    
    const dispatch=useDispatch()

    const saveData=()=>{
        let payload={
            full_name:fullname,
            contact_no: contact,
            user_name: username,
            password: password,
            user_type: user_type
        }

        var mailformat = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        var phoneno = /^\d{10}$/;

        if(payload.full_name!='' && payload.password!=''&& payload.user_name!=''&& payload.contact_no!=''){
            if(payload.user_name.match(mailformat)){
                if(payload.contact_no.match(phoneno)){
                    dispatch(saveUserData(payload))
                }else{
                    alert("You have entered an invalid mobile no!")
                }
            }else{
                alert("You have entered an invalid email address!")
            }
        }else{
            alert("Please fill all the Fields")
        }
    }
  return (
    <div>
        <div>
           <LoginRegHeader/>
            

                <div className="account-page">
                <div className="container">
                    <div className="row">
                    <div className="col-2">
                        <div className="form-container">
                        <div className="form-btn">
                
                            <label className="reg">Register -{user_type} </label>
                            <hr className="indicator" />
                        </div>
                    
                        <div action="" className="formContainer" id="RegForm">
                            <input value={fullname} onChange={(evt)=>setFullname(evt.target.value)} type="text" placeholder="Full name" />
                            <input value={contact} onChange={(evt)=>setContact(evt.target.value)} min="1" max="10" type="number" placeholder="Contact no" />
                            <input value={username} onChange={(evt)=>setEmail(evt.target.value)} type="email" placeholder="Email"  pattern=".+@globex\.com" size="30" required/>
                            <input value={password} onChange={(evt)=>setPassword(evt.target.value)} type="password" placeholder="Password" />
                       
                           
                            
                            <button onClick={()=>saveData()} type="submit" className="btn">Register</button>
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
    </div>
  )
}

