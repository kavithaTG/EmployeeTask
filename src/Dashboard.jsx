import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom"
import Update from "./Update"

const Dashboard = () => {
  const[user,setUser]=useState([])

  useEffect(()=>{
    axios.get("http://localhost:3001")
    .then(result =>setUser(result.data))
    .catch(err => console.log(err))
  },[])
  return (
    <div className="d-flex vh-140 bg-light justify-content-center align-items-center">
      <div className="w-100 bg-white rounded p-3">
        <table className='table'>
          <thead>
            <tr>
              <th>EMP_Id</th>
              <th>EMP_Name</th>
              <th>EMP_Phone</th>
              <th>EMp_Email</th>
              <th>EMP_Password</th>
              <th>EMP_Designation</th>
              <th>EMP_Course</th>
              <th>EMP_Gender</th>
              <th>EMP_CreatedDate</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{
            user.map((users) => {
            return <tr>
                <td>{users.f_id}</td>
                <td>{users.f_name}</td>
                <td>{users.f_phone}</td>
                <td>{users.f_email}</td>
                <td>{users.f_password}</td>
                <td>{users.f_designation}</td>
                <td>{users.f_course}</td>
                <td>{users.f_gender}</td>
                <td>{users.f_createdate}</td>
                <td>
                  <Link to={`/Update/${users._id}`}>
                  <button className='btn btn-success'>edit</button>
                  </Link>
                  </td>
              </tr>
            })
          }
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default Dashboard