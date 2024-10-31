import React from 'react'
import "./Login.css" 
import { Link } from 'react-router-dom'
import axios from 'axios'

import { useNavigate } from 'react-router-dom'


function Login() {

  const navigate = useNavigate()
  function handlelogin(e) {
    e.preventDefault()
    let data = new FormData(e.currentTarget)

    axios.post("https://server-tuei.onrender.com/login/", data)
    .then((response) => {
      localStorage.setItem("token", response.data.access)
    alert("login successfull")
    window.location.href ="/"
  })
  .catch((error) => {
    alert(error.response.data.detail);
  })
  }

  return (
    <div>
     <div className='container'>
     <div className='border w-100'>
     <h1 style={{textAlign: "center"}}>Welcome</h1>
      <p style={{textAlign: "center"}}>Login to your account</p><br />
      <div className='login'>
      <form onSubmit={handlelogin}>
      <label style={{textAlign: "center"}} htmlFor="username">Username</label>
        <div className='username'>
        <input className='form-control' type="text" placeholder='Email' name='email' required />
        </div>
        <label htmlFor="password" className='form-label'>Password</label>
        <div className='password'>
          <input type="text" placeholder='password' required className='form-control' name='password'/>

        </div>
        <div className='btn'>
          <button className='btn btn-outline-primary' type='submit'>Login</button> <br />

          <Link to="/signup" className='btn btn-primary align-item-center mt-3'>SignUp</Link>
        <p style={{textAlign: "center"}}>click to create an account</p><br />
        </div>
      </form>
      </div>
     </div>

     </div>
      

    </div>
  )
}

export default Login