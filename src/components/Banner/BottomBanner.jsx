import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { SubCategories } from '../../https/axios'

const BottomBanner = () => {


  return (
    <>
          <div>
              <div className="discount">
                  <div className="discount-banner">
                      <div className="container d-flex justify-content-center align-items-center flex-column">
                          <h4 className="pb-4"><span className="price fw-bold">Special Offer</span> <span className="fst-italic">40% Discount</span></h4>
                          <h1 className="">Beautiful Diamond Rings For Wedding</h1>
                          <h6 className="discounttxt">Get your dreams comes true Beautiful Diamond Ring in affordable price</h6>
                          <Link to="/products/Diamond%20Ring" className="slidebtn fw-bold text-uppercase f-14 my-4">Shop Now</Link>
                      </div>
                  </div>
              </div>
          </div>
    </>
  )
}

export default BottomBanner