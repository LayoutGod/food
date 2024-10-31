import React from 'react'
import "./Signup.css"
import { Link } from 'react-router-dom'
import axios from 'axios'

import { useNavigate } from 'react-router-dom'

function Signup() {
  
  const navigate = useNavigate()
  function handleSignup(e) {
    e.preventDefault()
    let data = new FormData(e.currentTarget)

    axios.post("https://server-tuei.onrender.com/signup/", data)
    .then((response) => {
      localStorage.setItem("token", response.data.access)
    alert("signup successfull")
    navigate("/")
  })
  .catch((error) => {
    let allerors = error.response.data
    for(let key in allerors){
      alert(key + ":" + allerors[key])
    }
    console.log(error.response.data);
  })
  }

  return (
    <div>
      <div className='container border'>
          <h1 style={{textAlign: "center"}}>Sign Up</h1>
          <h5 style={{textAlign: "center"}}>creat account</h5><br />

          <div className='signup'>
            <form onSubmit={handleSignup}>
                <label style={{textAlign: "center"}} htmlFor="Name"></label>
                <div>
                  <input type="text" placeholder='first name' name='first_name' required/>
                </div><br />
                <label style={{textAlign: "center"}} htmlFor="Surname"></label>
                <div>
                    <input type="text" placeholder='last name' name='last_name'/>
                </div><br />
                <label htmlFor="Email"></label>
                <div>
                  <input type="text" placeholder='Email' name='email'/>
                </div><br />
                <label htmlFor="Password"></label>
                <div>
                  <input type="text" placeholder='Password' name='password'/>
                </div><br />
                <label htmlFor="Image"></label>
                <div>
                  <input type='file' placeholder='image' name='image'/>
                </div><br />
                <div className='btn'>
                <button className='btn btn-outline-primary' type='Submit'>Submit</button>
                <p className='text-primary'>already have an account</p>
            </div>
            </form>
           
          </div>
      </div>
    </div>
  )
}

export default Signup