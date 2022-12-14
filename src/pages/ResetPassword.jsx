import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { PassReset } from '../https/axios'

const ResetPassword = () => {

   const [email, setEmail] = useState('')
   const navigate = useNavigate()

    const senddata = async () => {
        try {
            if (email) {
                const resetpass = await PassReset({ email })
                if (resetpass.data.Success === 1) {
                    toast("The reset password link  is sent to your email address", { theme: "dark", type: "success" })
                    navigate("/changepassword")
                } else {
                    navigate("/resetpassword")
                    toast("Please Enter Correct Email Address", { theme: "dark", type: "error" })
                }
            }
            else {
                toast("Please Enter Email", { theme: "dark", type: "error" })
            }
        } catch (error) {
            toast("Wrong Email", { theme: "dark", type: "error" })
        }
    }

  return (
    <>
          <div className="login">
              <div className="container">
                  <div className="row cusHeight d-flex justify-content-center align-items-center">
                      <div className="row m-0 justify-content-center">
                          <div className="col-lg-6 col-md-12 col-sm-12 p-0 reset-bg d-none d-lg-block"></div>
                          <div className="col-lg-6 col-md-12 col-sm-12 left-side login-bg">
                              <div className="form p-5" action="" >
                                  <h3 className="signin text-center">reset password</h3>
                                  <h6 className="login-name">Email :</h6>
                                  <input type="text" value={email} onChange={e => {setEmail(e.target.value)}} placeholder="Enter Your Email" />
                                      <button onClick={senddata} className="loginbtn w-100 my-2 py-3">
                                          <span className="text-capitalize">submit</span>
                                      </button>
                                      <h6 className="an-account text-center py-2">Don't have an account? <Link to="/register" className="ms-2"><strong>Create
                                          Account</strong></Link></h6>
                                      <h6 className="text-center"><Link to="/"><i className="fa-solid fa-arrow-left"></i> &nbsp; Back to Home</Link></h6>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
    </>
  )
}

export default ResetPassword