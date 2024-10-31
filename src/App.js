import React, {Suspense, lazy} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// bootstrap

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.js"



// component
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";



// mypages

const Home = lazy(() => import("./pages/Home"))
const Login = lazy(() => import("./pages/Login"))
const Signup = lazy(() => import("./pages/Signup"))
const Details = lazy(() => import("./pages/Details"))
const Cart = lazy(() => import("./pages/Cart"))
const Notfound = lazy(() => import("./pages/Notfound"))



function App() {
  return (
    
    <Suspense fallback={<div className="spinner-grow position-absolute top-50 start-50 translate-middle h-100">
      
    </div>}>
      <BrowserRouter>
      <Navbar/>
      <Routes>

        <Route path="/"element={<Home/>}/>
        <Route path="/login"element={<Login/>}/>
        <Route path="/signup"element={<Signup/>}/>
        <Route path="/details/id" element={<Details/>}/>
        <Route path="/cart"element={<Cart/>}/>
        <Route path="*"element={<Notfound/>}/>

      </Routes>
      <Footer/>
      </BrowserRouter>

    </Suspense>
  );
}

export default App;
