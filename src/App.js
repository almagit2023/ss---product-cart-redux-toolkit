import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import NavBar from './components/NavBar';
import Home from './pages/Home';
import Cart from './pages/Cart';

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';


const App = () => {

  return (
    <div className="appStyle">
      <h1 className='appHeading'>MY PRODUCT CART</h1>
      <NavBar />
      <Routes>
        <Route path='/' element={<Navigate to='/home' />} />
        <Route path='/home' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
      <ToastContainer />
    </div>
  )
}

export default App