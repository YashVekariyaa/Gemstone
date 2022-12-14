import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { EmailSubscriber } from '../https/axios'
import validator from 'validator'

const Footer = () => {

    const navigate = useNavigate()
    const [email, setEmail] = useState('')

    const senddata = async () => {
        try {
            if(email){
                const useremail = await EmailSubscriber({email})
                console.log("email",useremail)
                if(useremail){
                    setEmail('')
                    toast("NewsLatter send Successfully",{ theme: "dark", type: "success" })
                }
            }else{
                toast("Enter Email Address", { theme: "dark", type: "error" }) 
            }
        } catch (error) {
            toast("NewsLatter Not Send", { theme: "dark", type: "error" }) 
        }
    }

    const [emailError, setEmailError] = useState('')
    const validateEmail = (e) => {

        var email = e.target.value

        if (validator.isEmail(email)) {
            setEmailError('Valid Email :)')
            setEmail(email)
        } else {
            setEmailError('Enter valid Email!')
        }
    }

  return (
    <>
        <footer className="main-footer">
        <div className="container">
            {/* <!--Widgets Section--> */}
            <div className="widgets-section">
                <div className="row clearfix">
                    
                    {/* <!--Column--> */}
                    <div className="big-column col-lg-6 col-md-12 col-sm-12">
                        <div className="row clearfix">
                        
                            {/* <!--Footer Column--> */}
                            <div className="footer-column col-lg-7 col-md-6 col-sm-12">
                                <div className="footer-widget about-widget">
                                    <div className="logo">
                                        <a href="/"><img src="/images/logo.png" alt="Logo" className="img-fluid" draggable="false" /></a>
                                    </div>  
                                    <div className="text">
                                        <p>Lorem ipsum dolor amet consectetur adipisicing elit sed eiusm tempor incididunt ut labore dolore magna aliqua enim ad minim veniam.</p>
                                        {/* <!-- <div className="social-media">
                                          <i className="fa-brands fa-facebook-f"></i>
                                          <i className="fa-brands fa-twitter"></i>
                                          <i className="fa-brands fa-pinterest-p"></i>
                                          <i className="fa-brands fa-instagram"></i>
                                          <i className="fa-brands fa-youtube"></i>
                                          <i className="fa-brands fa-linkedin-in"></i>
                                        </div> --> */}
                                        <ul className="social-links">
                                          <li className="google"><a href="#"><span className="fab fa-google-plus-g"></span></a></li>
                                          <li className="facebook"><a href="#"><span className="fab fa-facebook-f"></span></a></li>
                                          <li className="instagram"><a href="#"><span className="fab fa-instagram"></span></a></li>
                                          <li className="twitter"><a href="#"><span className="fab fa-twitter"></span></a></li>
                                      </ul>
                                    </div>
                                </div>
                            </div>
                            
                            {/* <!--Footer Column--> */}
                            <div className="footer-column col-lg-5 col-md-6 col-sm-12">
                                <div className="footer-widget links-widget">
                                    <h3>Quick Links</h3>
                                    <ul className="footer-list">
                                        <li className="menuitem"><a href="/">Home</a></li>
                                        <li className="menuitem"><a href="/allproduct">Shop</a></li>
                                        <li className="menuitem"><a href="/blog">Blog</a></li>
                                        <li className="menuitem"><a href="/aboutus">About Us</a></li>
                                        <li className="menuitem"><a href="/contactus">Contact Us</a></li>
                                    </ul>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    
                     {/* <!--Column--> */}
                    <div className="big-column col-lg-6 col-md-12 col-sm-12">
                        <div className="row">
                            {/* <!--Footer Column--> */}
                            <div className="footer-column col-lg-6 col-md-6 col-sm-12">
                                <div className="footer-widget">
                                    <h3>Your Account</h3>
                                    <ul className="footer-list">
                                      <li><a href="/account">My Account</a></li>
                                      {/* <li><a href="/login">Login</a></li> */}
                                      <li><a href="/wishlist">Wishlists</a></li>
                                      {/* <li><a href="#">My Addresses</a></li> */}
                                      <li><a href="/myorder">My Orders</a></li>
                                  </ul>
                                </div>
                            </div>
                            
                            {/* <!--Footer Column--> */}
                            <div className="footer-column col-lg-6 col-md-6 col-sm-12">
                                <div className="footer-widget info-widget">
                                    <h3>Newsletter</h3>
                                    <ul className="info-list">
                                        <p>Stay Updated With Us For News And Offers</p>
                                        <div className="input-group mb-3">
                                          <input type="email" className="form-control inputNew"
                                                onChange={(e) => validateEmail(e)} placeholder="Enter Your Email" />
                                          <div className="input-group-btn">
                                            <button onClick={senddata} type="submit" className="newsbtn">
                                              <span className="fw-bold text-uppercase">Subscribe</span>
                                            </button>
                                          </div>
                                        </div>
                                              <small style={{
                                                  fontWeight: 'bold',
                                                  color: 'red',
                                              }}>{emailError}</small>
                                        <li><i className="fa-solid fa-location-dot facon"></i> &nbsp; O Box 1612 Collin Street, NYC</li>
                                        <li><i className="fa-solid fa-phone facon"></i> &nbsp; +801 - 2345 - 6789</li>
                                        <li><i className="fa-solid fa-envelope facon"></i>  &nbsp; support@gemstone.com</li>
                                    </ul>
                                </div>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
        {/* <!-- Footer Bottom --> */}
        <div className="footer-bottom">
            <div className="container">
                <div className="row clearfix">
                    <div className="column col-lg-6 col-md-12 col-sm-12">
                        <div className="copyright text-center"><span className="theme_color">Gemstone</span> &copy; 2022 All Right Reserved</div>
                    </div>
                    <div className="column col-lg-6 col-md-12 col-sm-12">
                        <ul className="footer-nav">
                            <li><a href="#">Terms of Service</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    
    </footer>
          <div className="go-top active ms-auto">
              <i className="fas fa-chevron-up"></i>
          </div>
    </>
  )
}

export default Footer