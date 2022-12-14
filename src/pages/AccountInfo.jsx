import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { GetUser } from '../https/axios'
import { setLogIn, setUser } from '../redux/Slice/userSlice'
const AccountInfo = () => {

    const [user, setUser] = useState({})

    const dispatch = useDispatch()

    useEffect(() => {
        async function UserData(){
            const userdata = await GetUser()
            console.log("User",userdata.data)
            setUser(userdata.data)
        }
        UserData()
    }, [])
    console.log("user",user)
    
  return (
      <>
          <Header />
          <div className="account-info mt-md-5 mt-3">
              <div className="container pb-5">
                  <div className="login-details">
                      <div className="your-detail mt-2">
                          <h5>your personal details</h5>
                          <span className="mt-md-3 mt-3"><strong>First name :</strong> {user.firstname}</span>
                          <span><strong>Last name :</strong> {user.lastname}</span>
                          <span><strong>email :</strong> {user.email}</span>
                          <span><strong>address :</strong>
                              <p className="d-inline-block mb-0">{user.address}</p>
                          </span>
                          <span><strong>pincode :</strong> {user.pincode}</span>
                          <span><strong>mobile :</strong> +91 {user.mobile}</span>
                      </div>
                  </div>
              </div>
          </div>
          <Footer />
      </>
  )
}

export default AccountInfo