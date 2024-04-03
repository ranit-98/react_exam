import React, { useState } from 'react'
import Styles from '../Styles/form.module.css'
import { RegisterPost } from '../Services/API'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from 'react-router-dom';
const Register = () => {
    const initialData={
        name:"",
        email:"",
        mobile:"",
        password:""
    }
    const [error, setError] = useState();
    const [clickSpin, setClickSpin] = useState(false);
    const navigate=useNavigate()
    const [registration,setRegistration]=useState(initialData)
    const validation=()=>{
        let error = {};
        if(!registration.name){
            error.name="Name is required"
        }
        if(!registration.email){
            error.email="Email is Required"
        }
        if(!registration.mobile){
            error.mobile="mobile is required"
        }
        if(!registration.password){
            error.password="password is required"
        }
        return error
    }
    const handleChange=(e)=>{
        const {name,value}=e.target
        setRegistration({
            ...registration,
            [name]:value
        })
        if (name == "name") {
            if (value.length === 0) {
              setError({ ...error, name: "@name is require" });
              setRegistration({...registration,name:""})
            } else {
                setError({ ...error, name: "" });
                setRegistration({...registration,name:value})
            }
          }
          if (name == "email") {
            if (value.length === 0) {
              setError({ ...error, email: "@email is require" });
              setRegistration({...registration,email:""})
            } else {
                setError({ ...error, email: "" });
                setRegistration({...registration,email:value})
            }
          }
          if (name == "mobile") {
            if (value.length === 0) {
              setError({ ...error, mobile: "@mobile is require" });
              setRegistration({...registration,mobile:""})
            } else {
                setError({ ...error, mobile: "" });
                setRegistration({...registration,mobile:value})
            }
          }
          if (name == "password") {
            if (value.length === 0) {
              setError({ ...error, password: "@password is require" });
              setRegistration({...registration,password:""})
            } else {
                setError({ ...error, password: "" });
                setRegistration({...registration,password:value})
            }
          }
    }
    const handleSubmit=async(e)=>{
        e.preventDefault()
        setClickSpin(true);
        let ErrorList = validation();
        setError(validation());
        console.log(registration);
        const res=await RegisterPost(registration)
        console.log(res);
        Object.keys(ErrorList).length === 0 &&  navigate("/login")
        setClickSpin(false);
    }
  return (
    <>
    <form className={Styles.formContainer} method='post' onSubmit={handleSubmit} style={{height:"30rem"}}>
    <h1 className={Styles.formHeading}>Registration</h1>
    <div>
        <label>Name</label><br/>
        <input name='name' value={registration.name} onChange={handleChange} /><br/>
        <span style={{ color: "red", marginLeft: "10rem" }}>
            {error?.name}
          </span>
    </div>
    <div>
        <label>Email</label><br/>
        <input name='email' value={registration.email} onChange={handleChange} /><br/>
        <span style={{ color: "red", marginLeft: "10rem" }}>
            {error?.email}
          </span>
    </div>
    <div>
        <label>Mobile</label><br/>
        <input name='mobile' value={registration.mobile} onChange={handleChange} /><br/>
        <span style={{ color: "red", marginLeft: "10rem" }}>
            {error?.mobile}
          </span>
    </div>
    <div>
        <label>Password</label><br/>
        <input name='password' value={registration.password} onChange={handleChange} /><br/>
        <span style={{ color: "red", marginLeft: "10rem" }}>
            {error?.password}
          </span>
    </div>
    {
        !clickSpin ? (
            <button className='btn btn-primary' onClick={handleSubmit} >Register</button>
          ) : (
              <button className="btn btn-primary">
            <div class="spinner-border" role="status">
              <span class="sr-only">Loading...</span>
            </div></button>
          )
    }
   
    </form>
    </>
  )
}

export default Register
