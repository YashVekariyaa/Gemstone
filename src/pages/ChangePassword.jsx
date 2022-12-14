import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { GetUser, PassChange } from '../https/axios'

const ChangePassword = () => {

    const [password, setPassword] = useState('')
    const [cpassword, setCpassword] = useState('')
    const navigate = useNavigate()

   const search = useLocation().search;
   const token = new URLSearchParams(search).get("token");
//    console.log("token",token)

const senddata = async () => {
        console.log("Token::",token)
        try {
            if(password === cpassword){
                const ChangePass = await PassChange({password,cpassword,token})
                if(ChangePass.data.Success === 1){
                    toast("Password has been changed successfully", { theme: "dark", type: "success" })
                    navigate('/')
                }else{
                    toast("Password Changed Fail", { theme: "dark", type: "error" })
                }
            }
            else{
                toast("Password does not match", { theme: "dark", type: "error" })
            }
        } catch (error) {
                toast("Please Fill Details", { theme: "dark", type: "error" })            
        }
    }   

  return (
      <>
          <div className="login">
              <div className="container">
                  <div className="row cusHeight d-flex justify-content-center align-items-center">
                      <div className="row m-0 justify-content-center">
                          <div className="col-lg-6 col-md-12 col-sm-12 left-side login-bg">
                              <div className="p-5">
                                  <h3 className="signin text-center">Change Password</h3>
                                  <span className="login-name">New Password :</span>
                                  <input type="password" value={password} onChange={e => {setPassword(e.target.value)}} placeholder="Enter Your New Password" />
                                  <span className="login-name">Confim Password :</span>
                                  <input type="password" value={cpassword} onChange={e => {setCpassword(e.target.value)}} placeholder="Enter Your Confirm Password" />
                                  <button onClick={senddata} className="btn slidebtn w-100 mt-0 my-2">
                                      <span>Submit</span>
                                  </button>
                                  <h6 className="an-account text-center">Don't have an account? <Link to="/register"
                                      className="ms-2"><strong>Create Account</strong></Link></h6>
                              </div>
                          </div>
                          <div className="col-lg-6 col-md-12 col-sm-12 p-0 sign-bnr d-none d-lg-block"></div>
                      </div>
                  </div>
              </div>
          </div>
      </>
  )
}

export default ChangePassword