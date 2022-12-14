import React, { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { ContactUser } from '../https/axios'
import validator from 'validator'

const ContactUs = () => {

    const [name, setName] = useState('')
    const [mobile, setMobile] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const navigate = useNavigate()

    const senddata = async () => {
        try {
            if(name && mobile && email && message){
                const usercontact = await ContactUser({name,mobile,email,message})
                if(usercontact){
                    setName('')
                    setMobile('')
                    setEmail('')
                    setMessage('')
                    navigate("/contactus")
                    toast("Message send sucessfully", { theme: "dark", type: "success" })
                }else{
                    navigate("/contactus")
                    toast("Please fill details", { theme: "dark", type: "error" })
                }
            }else{
                navigate("/contactus")
                toast("Please fill details", { theme: "dark", type: "error" })
            }
        } catch (error) {
            toast("Message does not send", { theme: "dark", type: "error" })
            navigate("/contactus")
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
        <Header/>
          <div className="breadcrumbs_area mb-5">
              <div className="container">
                  <div className="row">
                      <div className="col-12">
                          <div className="breadcrumb_content">
                              <ul>
                                  <li><Link to="/">home</Link></li>
                                  <li>contact us</li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <section>
              <div className="contact-map">
                  <div className="map-area">
                      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.7207282042377!2d72.82914651533396!3d21.203250287173535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04fa318d94e6b%3A0x45ce513b9fa4b70f!2sGemstone%20building!5e0!3m2!1sen!2sin!4v1665996019750!5m2!1sen!2sin" width="600" height="450" style={{border: "0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                  </div>
              </div>

              {/* <!--contact area start--> */}
              <div className="contact_area">
                  <div className="container">
                      <div className="row">
                          <div className="col-lg-6 col-md-12">
                              <div className="contact_message content">
                                  <h3 className="mt-5">Get in touch</h3>
                                  <p>Fill The following form and seatback relax
                                      we will contact with you within 24 hours via Email.</p>
                                  <ul>
                                      <li><i className="fa-solid fa-location-dot facon"></i> Address :  O Box 1612 Collin Street, NYC</li>
                                      <li><i className="fa-solid fa-phone facon"></i> Phone:<a href="tel: +801) - 2345 - 6789"> +801 - 2345 - 6789
                                      </a> </li>
                                      <li><i className="fa-solid fa-envelope facon"> </i> Email: <a
                                          href="mailto:Gemstone@gmail.com">support@gemstone.com</a>
                                      </li>
                                  </ul>
                              </div>
                          </div>
                          <div className="col-lg-6 col-md-12">
                              <div className="contact_message right-side">
                                  <h3 className="mt-5">Contact Us</h3>
                                  <div className="row">
                                      <div className="">
                                          <span className="login-name">first name :</span>
                                          <input type="text" className="w-100 px-3 py-2 mt-1" placeholder="Your First Name" value={name} onChange={e => {setName(e.target.value)}} />
                                      </div>
                                  </div>
                                  <span className="login-name">Phone Number :</span>
                                  <input type="number" className="w-100 px-3 py-2 mt-1" placeholder="Your Phone Number" value={mobile} onChange={e => {setMobile(e.target.value)}} />
                                      <span className="login-name">Email :</span>
                                      <input type="email"  className="w-100 px-3 py-2 mt-1"  placeholder="Your Email" onChange={e => {validateEmail(e)}} />
                                        <small style={{
                                            fontWeight: 'bold',
                                            color: 'red',
                                        }}>{emailError}</small><br />
                                          <span className="login-name">Write Your Message :</span>
                                          <textarea name="text" placeholder="Your Message" className="w-100 px-3 py-2 mt-1" rows="8.8" value={message} onChange={e => {setMessage(e.target.value)}} ></textarea>
                                          <button onClick={senddata} className="btn slidebtn">Submit</button>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section> 
        <Footer/>
    </>
  )
}

export default ContactUs