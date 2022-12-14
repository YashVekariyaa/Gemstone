import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { GetUser, UpdateUser } from '../https/axios'

const UserAddress = () => {

    const [uadress, setUadress] = useState('')

    useEffect(() => {
        async function GetUsers() {
            const User = await GetUser()
            // console.log("LoginUser",User.data)
            setUadress(User.data)
        }
        GetUsers()
    }, [])
    

    const [address, setAddress] = useState('')
    const [pincode, setPincode] = useState('')

    const updatedata = async () => {
        try {
            if ( address ) {
                const updateaddress = await UpdateUser({ address, pincode })
                if (updateaddress) {
                    setAddress('')
                    setPincode('')
                    toast("Update Address Successfully", { theme: "dark", type: "success" })
                }
                else {
                    toast("Add Address Failed", { theme: "dark", type: "error" })
                }
            }
            else {
                toast("Add Address Failed", { theme: "dark", type: "error" })
            }
        } catch (error) {
            toast("Add Address Failed", { theme: "dark", type: "error" })
        }
    }


  return (
      <>
          <Header />
          <div className="container my-5">
              <div className="shop-login mt-4 d-flex align-items-start">
                  <i className="fa-solid fa-user icon mt-1"></i>
                  <div className="login-details ms-4">
                      <h5 className="d-block detail-title">Edit Address</h5>
                      <div className="your-detail mt-2">
                          <span><strong>address :</strong>
                              <p className="d-inline-block mb-0">{uadress.address}</p>
                          </span>
                          <span><strong>pincode :</strong> {uadress.pincode}</span>
                      </div>
                  </div>
                  <a href="#" className="ms-auto change-detail" data-bs-toggle="modal" data-bs-target="#personal-detail">EDIT</a>
                  <div className="modal fade" id="personal-detail" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div className="modal-dialog modal-dialog-centered">
                          <div className="modal-content">
                              <div className="modal-header">
                                  <h5 className="modal-title edit-add" id="exampleModalLabel">Edit Your Address</h5>
                                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                              </div>
                              <div className="modal-body pb-0">
                                  <span className="login-name mt-3 d-block">Your Address :</span>
                                  <input type="text" placeholder="Enter Your Address" value={address} onChange={e => { setAddress(e.target.value) }} className="p-2 mt-2 w-100" />
                                  <span className="login-name mt-3 d-block">Your Pincode :</span>
                                  <input type="numeric" placeholder="Enter Your Pincode" value={pincode} onChange={e => { setPincode(e.target.value) }} className="p-2 mt-2 w-100" />
                              </div>
                              <div className="modal-footer">
                                  <a href='/myaddress' onClick={updatedata} className="btn slidebtn">Submit</a>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <Footer />
      </>
  )
}

export default UserAddress