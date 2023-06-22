import React,{useState} from 'react'
import Registration from './Registration'
import {Link} from "react-router-dom"
import Dashboard from './Dashboard'
import { useNavigate } from 'react-router-dom'
import axios from "axios"
const Login = () => {

    const[f_email,set_Email]=useState()
    const[f_password,set_Password]=useState()
    const navigate=useNavigate()

    const handlelogin=(e)=>{
        e.preventDefault()
        axios.post("http://localhost:3001/login",{f_email,f_password})
        .then(result =>{console.log(result)
            if(result.data ==="success"){
                alert("login successfull!!")
                navigate("/Dashboard")
            }
            else{
                alert("There is no matching records!!")
            }
       
        })
        .catch(err =>console.log(err))
        }
    
  return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
        <div className="bg-white p-3 rounded w-50">
            <div className="loginh1">
                <h1>Login Form!!</h1>
            </div>
            <form action="" onSubmit={handlelogin}>
            <div className="mb-1">
            <label htmlFor="Emp_Email">Email</label>
            <input type="email" name='f_email' placeholder='Enter Email' onChange={(e)=>set_Email(e.target.value)}/>
        </div>
        <div className="mb-1">
            <label htmlFor="Emp_Pasword">Password</label>
            <input type="password" name='_password' placeholder='Enter Password' onChange={(e)=>set_Password(e.target.value)} />
        </div>
        <div className="btndiv">
            <button className='btn btn-success w-100 rounded-0'>submit</button>
        </div>
        <div className="link">
           <p> Do You Want To Register..?<Link to="/"><a href={<Registration/>}>Register</a></Link></p>
           <p> Do You Want Dashboard..?<Link to="/Dashboard"><a href={<Dashboard/>}>Dashboard</a></Link></p>
        </div>
        </form>
        </div>
    </div>
  )
}

export default Login