import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import { Registeruser } from '../https/axios';
import validator from 'validator'

const Register = () => {

  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [pincode, setPincode] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmpassword] = useState('');
  const [mobile, setMobile] = useState('');
  const navigate = useNavigate();

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
            const userregister = await Registeruser({ firstname, lastname, email, address, pincode, password, confirmpassword, mobile })
            if (password === confirmpassword) {
                setFirstname('')
                setLastname('')
                setEmail('')
                setAddress('')
                setPincode('')
                setPassword('')
                setConfirmpassword('')
                setMobile('')
                navigate("/login")
                toast("User Register successfully", { theme: "dark", type: "success" })
            }
            else {
                navigate("/register")
                toast("Password Does Not Match", { theme: "dark", type: "error" })
            }
        } catch (error) {
            navigate("/register")
            toast("Please Fill Details", { theme: "dark", type: "error" })
        }
    }

    


  return (
    <>
      <div className="login">
        <div className="container">
            <div className="row cusHeight d-flex justify-content-center align-items-center">
                <div className="row m-0 justify-content-center">
                    <div className="col-lg-6 col-md-12 col-sm-12 right-side login-bg">                        
                        <div className="p-5">
                            <h3 className="signin text-center">Register</h3>
                            <div className="row d-flex justify-content-center align-items-center">
                                <div className="col-sm-6 fname">
                                    <label className="login-name">first name :</label>
                                    <input type="text" placeholder="Enter Your First Name" required value={firstname} onChange={e => {setFirstname(e.target.value)}} className="d-block reg-name"/>
                                </div>
                                <div className="col-sm-6 lname">
                                    <span className="login-name">last name :</span>
                                    <input type="text" placeholder="Enter Your Last Name" required value={lastname} onChange={e => {setLastname(e.target.value)}} className="d-block reg-name"/>
                                </div>
                            </div>
                            <span className="login-name">Email :</span>
                            <input type="text" placeholder="Enter Your Email Address" onChange={(e) => validateEmail(e)} required/>
                                  <small style={{
                                      fontWeight: 'bold',
                                      color: 'red',
                                  }}>{emailError}</small><br />
                            <span className="login-name">Address :</span>
                            <input type="text" placeholder="Enter Your Address" required value={address} onChange={e => {setAddress(e.target.value)}} />
                            <span className="login-name">Pincode :</span>
                            <input type="number" placeholder="Enter Your Pincode" required value={pincode} onChange={e => {setPincode(e.target.value)}} />
                            <span className="login-name">password :</span>
                            <input type="password" placeholder="Enter Your Password" required value={password} onChange={e => {setPassword(e.target.value)}} />
                            <span className="login-name">confirm password :</span>
                            <input type="password" placeholder="Confirm Your Password" required value={confirmpassword} onChange={e => {setConfirmpassword(e.target.value)}} />
                            <span className="login-name">phone number :</span>
                            <input type="number" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required placeholder="Enter Your Phone Number"  value={mobile} onChange={e => {setMobile(e.target.value)}} />               
                            <button onClick={senddata} type="submit" className="loginbtn w-100 my-2 py-3">
                                <span className="text-capitalize">sign in</span>
                            </button>
                            <Link to="/login"><h6 className="an-account text-center pt-3">Already a user?</h6></Link>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 p-0 sign-up d-none d-lg-block"></div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Register