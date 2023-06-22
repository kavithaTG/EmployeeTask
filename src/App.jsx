import { useState } from 'react'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Registration from './Registration'
import Login from './Login'
import Dashboard from './Dashboard'
import "bootstrap/dist/css/bootstrap.min.css"
import Update from './Update'

function App() {
  return (
   <div className="appmaindiv">
    <div className="routediv">
<BrowserRouter>
<Routes>
  <Route path="/" element={<Registration/>}></Route>
  <Route path="/Login" element={<Login/>}></Route>
  <Route path="/Dashboard" element={<Dashboard/>}></Route>
  <Route path="/Update/:id" element={<Update/>}></Route>
</Routes>
</BrowserRouter>
    </div>
   </div>
  )
}

export default App
