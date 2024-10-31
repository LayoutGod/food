import React, {useEffect, useState} from 'react'

import "./Cart.css"
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement } from '../redux/Carslice'

import { usePaystackPayment } from 'react-paystack';

function Cart() {

  
  const carts = useSelector((state) => state.items)
  const totalprice = useSelector((state) => state.totalPrice)


  const navigate = useNavigate()
  const dispatch = useDispatch()

  
  function Payment() {
    let email = localStorage.getItem("email")

    const config = {
      reference: (new Date()).getTime().toString(),
      email: email,
      amount: Number(totalprice) * 100, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
      publicKey: 'pk_test_492ee332b8692c7318ea0cfb26ed723e9d861b38',
  };
  
  // you can call this function anything
  const onSuccess = (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    console.log(reference);
  };

  // you can call this function anything
  const onClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    alert('oh! I can deliver this in minutes')
  }
  const initializepayment = usePaystackPayment(config);
   
  if(email == null) {
      navigate("/login")
      
    }else if(totalprice == 0){
    navigate("/")
    }else{
      initializepayment(onSuccess, onClose);
    }
  }


  return (
    <div className='cart container'>


      <h4>Cart</h4>


      

      <div
        class="table-responsive"
      >
        <table
          class="table"
        >
          <thead>
            <tr className='text-center'>
              <th scope="col">Image</th>
              <th scope="col">Product Title</th>
              <th scope="col">Price</th>
              <th scope="col">Qty</th>
              <th scope="col">increment/decrement</th>
            </tr>
          </thead>
          <tbody>
            
            {carts?.map((cart) => (
              <tr className="text-center">
              <td scope="row"><img src={cart?.image} alt="food" /></td>
              <td>{cart?.title}</td>
              <td>{cart?.price}</td>
              <td>{cart?.qty}</td>
              <td className='d-flex justify-content-center gap-3 align-items-center'>

              <button onClick={() => dispatch(increment(cart))}>+</button>
              <p>{cart?.qty}</p>
              <button onClick={() => dispatch(decrement(cart))}>-</button>
              </td>
            </tr>

            ))}
            
          </tbody>
        </table>
      </div>
      {/*total*/}

      <h5>Total Prices: {totalprice}</h5>

      <div className='d-flex gap-2 mt-3 mb-5'>
            <Link to="/" className='btn btn-primary'>continue shopping</Link>
            <button className='btn btn-outline-primary' onClick={Payment}>proceed payment</button>
      </div>

    </div>
  )
}

export default Cart