import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter  } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

function Footer() {
  return (
    <footer className='bg-primary'>
        <section className='cotainer'>
            <div className='row'>
                <div className='col-md-3'>
                  <img className='' src="logo1.png" alt="" />
                  <h5>Tasty Treat</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, debitis?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, inventore?
                  </p>
                </div>
                <div className='col-md-3'>
                  <h2>Delivery Time</h2>
                  <h6>Sunday - to Thursday</h6>
                  <p>10AM - 11PM</p><br />

                  <h6>Friday - Saturday</h6>
                  <p>offday</p>

                </div>
                <div className='col-md-3'>
                  <h2>Contact</h2>
                  <p>Location: legacy avenue 17</p>
                  <p>Phone: 0813080799</p><br />
                  <p>Email: legacy134@gmail.com</p>
                </div>
                <div className='col-md-3'>
                  <h2>Newsletter</h2>
                  <p>Subscribe our newsletter</p><br />
                  <input type="text" 
                  placeholder='enter email' />
                  <FaSearch />

                </div>
                
            </div>
        </section>
        <section className='d-flex justify-content-around align-items-center'>
                <p>&copy; copyright - {new Date().getFullYear()}</p>
                <div>
                <FaFacebook size={30} color='red'/>
                <FaInstagram size={30} color='red' />
                <FaTwitter size={30} color='red'/>

                </div>
        </section>
    </footer>
  )
}

export default Footer