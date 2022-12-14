import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'

const Account = () => {
  return (
      <>
          <Header/>  
          <div className="breadcrumbs_area mb-5">
              <div className="container">
                  <div className="row">
                      <div className="col-12">
                          <div className="breadcrumb_content">
                              <ul>
                                  <li><Link to="/">home</Link></li>
                                  <li>Account</li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <section>
              <div className="container">
                  <div className="row">
                      <h5 className="fw-bold">Hello, Customer!</h5>
                      <p>From your Account you have the ability to view a snapshot of your recent account activity and update your account information. Select a link below to view or edit <br /> information.</p>
                  </div>
                  <div className="row">
                      <div className="col-md-12">
                          <div className="row">
                              <div className="col-md-4">
                                  <Link to="/accountinfo" className="account-detail d-flex">
                                      <span className="acc-icon"><i className="fa-solid fa-user"></i></span>
                                      <h6>
                                          your account information
                                      </h6>
                                  </Link>
                              </div>
                              <div className="col-md-4">
                                  <Link to="/resetpassword" className="account-detail d-flex">
                                      <span className="acc-icon"><i className="fa-solid fa-lock"></i></span>
                                      <h6>
                                          change your password
                                      </h6>
                                  </Link>
                              </div>
                              <div className="col-md-4">
                                  <Link to="/myorder" className="account-detail d-flex">
                                      <span className="acc-icon"><i className="fa-solid fa-cart-shopping"></i></span>
                                      <h6>
                                          my orders
                                      </h6>
                                  </Link>
                              </div>
                              <div className="col-md-4">
                                  <Link to="/wishlist" className="account-detail d-flex">
                                      <span className="acc-icon"><i className="fa-solid fa-heart"></i></span>
                                      <h6>
                                          Wishlist
                                      </h6>
                                  </Link>
                              </div>
                              <div className="col-md-4">
                                  <Link to="/myaddress" className="account-detail d-flex">
                                      <span className="acc-icon"><i className="fa-solid fa-heart"></i></span>
                                      <h6>
                                          Change Your Address
                                      </h6>
                                  </Link>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="row">
                      <div className="col-md-12">
                          <div className="row">
                              {/* <div className="col-md-4">
                                  <Link to="/wishlist" className="account-detail d-flex">
                                      <span className="acc-icon"><i className="fa-solid fa-right-from-bracket"></i></span>
                                      <h6>
                                          Logout
                                      </h6>
                                  </Link>
                              </div> */}
                              {/* <!-- <div className="col-md-4">
                                  <a className="account-detail d-flex">
                                      <span className="acc-icon"><i className="fa-solid fa-clock-rotate-left"></i></span>
                                      <h6>
                                          your return request
                                      </h6>
                                  </a>
                              </div>
                              <div className="col-md-4">
                                  <a className="account-detail d-flex">
                                      <span className="acc-icon"><i className="fa-solid fa-file-invoice"></i></span>
                                      <h6>
                                          your transaction
                                      </h6>
                                  </a>
                              </div> --> */}
                          </div>
                      </div>
                  </div>
              </div>
          </section>
          <Footer/>
      </>
  )
}

export default Account