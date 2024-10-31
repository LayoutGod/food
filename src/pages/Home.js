import React, { useEffect, useState } from 'react'
import "./Home.css"

// import FakeData from '../component/FakeData'
// import Foods from '../component/FakeData'
import { useSelector, useDispatch } from 'react-redux'
import { addtocart } from '../redux/Carslice'
import axios from 'axios'

function Home() {


  const [foods, setfoods] = useState([])

  const dispatch = useDispatch()

  const cart = useSelector((state) => console.log(state))

  useEffect(() =>{
    axios.get("http://127.0.0.1:8000/food/")
    .then((response) => setfoods(response.data))
    .catch((error) =>console.log(error))
  }, [])

  return (
    <div className='home'>
      <div className='hero'>
        <div>
          <h5>Welcome To <br /> Foodbank</h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit <br /> Explicabo, itaque.</p>

          <button className='btn btn-outline-danger'>see all food</button>
        </div>

      </div>

      {/* start product */}

      <div className='products container'>
        <h4>Hot Foods</h4>
        <small></small>
        <div className='row gap-2 justify-content-evenly'>

          {
            foods?.map((row) => (

              <div key={row?.id} className='card col-md-4'>
            <img src={row?.image} alt="" className='card-img-top' />
            <p className='card-body'>{row?.title}</p>
            <h6>{row?.price}</h6>
            <button onClick={() => dispatch(addtocart(row))} className="btn btn-primary m-3">add to cart</button>

          </div>
            ))
          }
        </div>
      </div>

      {/* end of product */}
    </div>
  )
}

export default Home