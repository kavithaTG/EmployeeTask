import React from 'react'
import {Link,useNavigate,useParams} from "react-router-dom"
import Login from "./Login"
import { useState,useEffect } from 'react'
import Dashboard from "./Dashboard"
import axios from "axios"

const Update = () => {
const {id}=useParams()
const[f_id,set_Id]=useState()
const[f_name,set_Name]=useState()
const[f_phone,set_Phone]=useState()
const[f_email,set_Email]=useState()
const[f_password,set_Password]=useState()
const[f_designation,set_Designataion]=useState()
const[f_course,set_Course]=useState()
const[f_gender,set_Gender]=useState()
const[f_createdate,set_Createdate]=useState()
const navigate=useNavigate()



useEffect(()=>{
    axios.get("http://localhost:3001/getuser/"+id)
    .then(result =>{console.log(result)
        set_Id(result.data.f_id)
        set_Name(result.data.f_name)
        set_Phone(result.data.f_phone)
        set_Email(result.data.f_email)
        set_Password(result.data.f_password)
        set_Designataion(result.data.f_designation)
        set_Course(result.data.f_course)
        set_Gender(result.data.f_gender)
        set_Createdate(result.data.f_createdate)
    })
    .catch(err => console.log(err))
  },[])

  const handleupdate=(e)=>{
    e.preventDefault()
    axios.put("http://localhost:3001/update/"+id,{f_id,f_name,f_phone,f_email,f_password,f_designation,f_course,f_gender,f_createdate})
    .then(result =>{console.log(result)
    navigate("/")
    })
    .catch(err =>console.log(err))

}
  return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100% ">
    <div className="bg-white p-3 rounded w-50 ">
    <h1>Update Form!!</h1>
     
     <form action="" onSubmit={handleupdate}>
         <div className="mb-1">
             <label htmlFor="Emp_ID">Emp_ID</label>
             <input type="number" name='f_id' value={f_id} placeholder='Enter ID' onChange={(e)=>set_Id(e.target.value)} />
         </div>
         <div className="mb-1">
             <label htmlFor="Emp_NAME">Emp_Name</label>
             <input type="text" name='f_name' value={f_name} placeholder='Enter Name' onChange={(e)=>set_Name(e.target.value)} />
         </div>
         <div className="mb-1">
             <label htmlFor="Emp_Phone">Emp_Phone</label>
             <input type="number" name='f_phone'value={f_phone} placeholder='Enter Phone number' onChange={(e)=>set_Phone(e.target.value)} />
         </div>
         <div className="mb-1">
             <label htmlFor="Emp_Email">Emp_Email</label>
             <input type="email" name='f_email'value={f_email} placeholder='Enter Email' onChange={(e)=>set_Email(e.target.value)}/>
         </div>
        <div className="mb-1">
         <label htmlFor="Emp_Password">Password</label>
         <input type="password" name='f_password'value={f_password} placeholder='Enter Password' onChange={(e)=>set_Password(e.target.value)} />
        </div>
         <div className="mb-1">
             <label htmlFor="Emp_Designation">Emp_Designation</label>
         <select name="f_designation" value={f_designation} onChange={(e)=>set_Designataion(e.target.value)}>
         <option value="Manager">Manager</option>
         <option value="Developer">Developer</option>
         <option value="Test Engineer">Test Engineer</option>
         </select>
         </div>
         <div className="mb-1">
             <label htmlFor="Emp_Course">Emp_Course</label>
         <select name="f_course" value={f_course} onChange={(e)=>set_Course(e.target.value)}>
         <option value="MCA">MCA</option>
         <option value="BCA">BCA</option>
         <option value="Bsc">Bsc</option>
         </select>
         </div>
         <div className="mb-1">
             Gender:
             <input type="radio" name='f_gender' value={f_gender} onChange={(e)=>{set_Gender(e.target.value)}} />Male
             <input type="radio" name="f_gender" value={f_gender} onChange={(e)=>{set_Gender(e.target.value)}} />Female
         </div>
         <div className="mb-1">
             <label htmlFor="Emp_Createdate">Emp_Createdate</label>
             <input type="date" name='f_createdate' value={f_createdate} onChange={(e)=>{set_Createdate(e.target.value)}} />
         </div>
         <div className="btndiv">
             <button className='btn btn-success w-100 rounded-0'>update</button>
         </div>
         <div className="link">
             <>Do You Have An Account..?<Link to="/Login"><a href={<Login/>}>Login</a></Link></><br />
             <>Do You Want Dashboard..?<Link to="/Dashboard"><a href={<Dashboard/>}>Dashboard</a></Link></>
         </div>
     </form>
    </div>
    </div>
   
  )
}

export default Update