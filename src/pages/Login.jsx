import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Loginuser } from '../https/axios'
import validator from 'validator'
import { useDispatch } from 'react-redux'
import { setLogIn, setUser } from '../redux/Slice/userSlice'

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()
    const navigate = useNavigate()

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

    const senddata = async () => {
        try {
            if(email && password){
                const userlogin = await Loginuser({email,password})
                console.log("login",userlogin.data.user)
                if(userlogin.data.success === 1){
                    dispatch(setUser(userlogin.data.user))
                    dispatch(setLogIn(true))
                    toast("Login Sucessfully", { theme: "dark", type: "success" })
                    navigate("/")
                }else{
                    navigate("/login")
                    toast("Login Fail", { theme: "dark", type: "error" })
                }
            } else {
                toast("Please fill details", { theme: "dark", type: "error" })
                navigate("/login")
            }
        }catch (error) {
            toast("Login Fail", { theme: "dark", type: "error" })
            navigate("/login")
        }
    }

  return (
    <>
        <div className="login">
        <div className="container">
            <div className="row cusHeight d-flex justify-content-center align-items-center">
                <div className="row m-0 justify-content-center">
                    <div className="col-lg-6 col-md-12 col-sm-12 p-0 sign-bnr d-none d-lg-block"></div>
                    <div className="col-lg-6 col-md-12 col-sm-12 left-side login-bg">
                        <div className="form p-5" action="" >
                            <h3 className="signin text-center">sign in</h3>
                            <h6 className="login-name">Email :</h6>
                            <input type="text" placeholder="Enter Your Email"  onChange={e => validateEmail(e)} />
                            <small style={{
                                      fontWeight: 'bold',
                                      color: 'red',
                                  }}>{emailError}</small><br />
                            <h6 className="login-name">password :</h6>
                            <input type="password" placeholder="Enter Your Password" value={password} onChange={e => {setPassword(e.target.value)}}  />
                            <div className="remember d-flex justify-content-end align-items-center">
                                <div className="check d-none">
                                    <label><input type="checkbox" id="" name=""
                                     value="" className="text-left check"/>
                                    <span className="ms-2">remember for 30 days</span></label>
                                </div>
                                <h6 className="text-right forgot">
                                    <Link to="/resetpassword">forgot password ?</Link>
                                </h6>
                            </div>
                            <button onClick={senddata} className="btn loginbtn w-100 my-2 py-3">
                                <span className="text-capitalize">sign in</span>
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

export default Login