import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'

const PaymentFail = () => {
  return (
    <>
        <Header/>
         <div className='paysuccess text-center py-5'>
            <h1><i className="fa-solid fa-circle-check" style={{color:'red'}}></i></h1>
              <h3 className='fw-bold text-uppercase'>Your Order Fail Due To Technical Reason.</h3>
              <p className='fs-5'>Your order fail and order status is updated shortly by our staff.</p>
              <Link to="/allproduct" className='btn slidebtn my-5'>Continue Shopping</Link>
         </div>   
        <Footer/> 
    </>
  )
}

export default PaymentFail
