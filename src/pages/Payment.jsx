import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { DeleteCart, DiscountCoupen, DisplayOrder, GetCart, GetUser, Order, Payments, PostUser, UpdateUser, Verify } from '../../src/https/axios'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

const Payment = (amount) => {
    const navigate = useNavigate()
    const [loginuser, setLoginuser] = useState([])
    const [order, setOrder] = useState([])
    const [ucart, setUcart] = useState([])
    const [subtotal, setSubtotal] = useState([])
    const [totalamount, setTotalamount] = useState()
    const [payment, setPayment] = useState(false)
    const [cod, setCod] = useState(false)
    const [PaymentType, setPaymentType] = useState('')
    const [verify, setVerify] = useState('')
    const [online, setOnline] = useState(false)
    const [payActive, setPayActive] = useState('')


    const [firstname, setFirstname] = useState()
    const [lastname, setLastname] = useState()
    const [email, setEmail] = useState()
    const [address, setAddress] = useState()
    const [pincode, setPincode] = useState()
    const [password, setPassword] = useState()
    const [confirmpassword, setConfirmpassword] = useState()
    const [mobile, setMobile] = useState()

    const [coupen, setCoupen] = useState('')


    const dispatch = useDispatch();

    useEffect(() => {
        async function GetUsers() {
            const User = await GetUser()
            // console.log("LoginUser",User.data)
            setLoginuser(User.data)
        }
        GetUsers()
    }, [])

    useEffect(() => {
        async function fetchData() {
            const data = await GetCart()
            // console.log("Data",data.data[0].quantity)
            setUcart(data.data.cartdata)
        }
        fetchData()
    }, [])

    useEffect(() => {
        async function subtotals() {
            let total = 0;
            ucart.filter(data => {
                parseInt(data.product.price)
                total = total + data.product.price * data.quantity
            })
            var totals = parseInt(total)
            setSubtotal(totals)
        }
        subtotals()
    }, [ucart])


    useEffect(() => {
        async function maintotal() {
            let total = 10;
            ucart.filter(data => {
                parseInt(data.product.price)
                total = total + data.product.price * data.quantity
            })
            var totals = parseInt(total)
            setTotalamount(totals)
        }
        maintotal()
    }, [ucart])


    // useEffect(() => {
    //     async function Discount() {
    //         const offer = await DiscountCoupen()
    //         // console.log("offer",offer.data.DiscountCoupen)
    //         setCoupen(offer.data.DiscountCoupen)
    //     }
    //     Discount()
    // }, [])




    const updatedata = async () => {
        try {
            if ( email || address || pincode || mobile) {
                const updateuser = await UpdateUser({ address, pincode })
                if (updateuser) {
                    setEmail('')
                    setAddress('')
                    setPincode('')
                    setMobile('')
                    toast("Update Detail Successfully", { theme: "dark", type: "success" })
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

    const initPayment = async (data) => {
        var options = {
            key: "rzp_test_g7KgxqCFDni1K8",
            amount: data.amount,
            currency: data.currency,
            name: "Gemstone",
            description: "Test Transaction",
            image: "http://localhost:3000/images/logo.png",
            order_id: data._id,
            handler: async (response) => {
                console.log("res", response)
                try {
                    const veryfydata = await Verify(response)
                    // toast("Payment Successfully", { theme: "dark", type: "success" })
                    if (!veryfydata.data) {
                        console.log("payment is not done")
                    }
                    else {
                        for (let i = 0; i < ucart.length; i++) {
                            let pid = ucart[i].product._id
                            let uid = ucart[i].userId._id
                            let cartid = ucart[i]._id
                            let quantity = ucart[i].quantity
                            const data = await Order({ pid, uid, cartid, quantity, totalamount, PaymentType: "online payment" })
                            console.log("data", data)
                            setOrder(data)
                        }
                        setVerify(true)
                        toast("Order Palced Sucessfully", { theme: "dark", type: "success" })

                        setPayment(true)
                        navigate("/paymentsuccess")

                    }
                } catch (error) {
                    console.log(error);
                }
            },
            theme: {
                "color": "#3399cc"
            },
        };
        const rzp1 = new window.Razorpay(options);
        const abcd = await rzp1.open();
        rzp1.on('payment.failed', function (response) {
            toast("Order Failed", { theme: "dark", type: "error" })
            navigate('/paymentfail')
        });
    };

    console.log("payActive", payActive)
    const handlePayment = async () => {
        try {
            if (payActive === "online") {
                let name = loginuser
                const pays = await Payments({ amount: totalamount, name })
                initPayment(pays.data.data);
                setPayActive(true)
            } else if (payActive === "cod") {
                setCod(true)
                setPayment(true)
                for (let i = 0; i < ucart.length; i++) {
                    let pid = ucart[i].product._id
                    let uid = ucart[i].userId._id
                    let cartid = ucart[i]._id
                    let quantity = ucart[i].quantity
                    const data = await Order({ pid, uid, cartid,quantity,totalamount, PaymentType: "cash on delivery" })
                    toast("Order Palced Sucessfully", { theme: "dark", type: "success" })
                    setOrder(data)
                    navigate("/paymentsuccess")
                }
            }
            else {
                toast("Please select payment method", { theme: "dark", type: "error" })
            }
        } catch (error) {
            console.log(error);
        }
    };


    // const Cashon = async () => {
    //     try {
    //         setCod(true)
    //         setPayment(true)
    //         for(let i = 0; i < ucart.length; i++){
    //             let pid = ucart[i].product._id
    //             let uid = ucart[i].userId._id
    //             let cartid = ucart[i]._id
    //             const data = await Order({pid, uid, cartid, totalamount, PaymentType: "cash on delivery"})
    //             toast("Order Palced Sucessfully", { theme: "dark", type: "success" })
    //             setOrder(data)
    //             navigate("/paymentsuccess")
    //         }
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    // const paynow = async () => {
    //     if(payment === cod){
    //         Cashon();
    //         setCod(true)
    //         setPayment(true)
    //     }
    //     else{
    //         handlePayment();
    //     }
    // }



    return (
        <>
            <Header />
            <section>
                <div className="shopping-cart">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7 col-md-7 cart-details">
                                <h3>shopping cart</h3>
                                <div className="shop-login mt-4 d-flex align-items-start">
                                    <i className="fa-solid fa-user icon mt-1"></i>
                                    <div className="login-details ms-4">
                                        <h5 className="d-block detail-title">Edit Address</h5>
                                        <div className="your-detail mt-2">
                                            {/* <span><strong>first name :</strong> {loginuser.firstname}</span>
                                            <span><strong>Last name :</strong> {loginuser.lastname}</span> */}
                                            {/* <span><strong>email :</strong> {loginuser.email}</span> */}
                                            <span><strong>address :</strong>
                                                <p className="d-inline-block mb-0">{loginuser.address}</p>
                                            </span>
                                            <span><strong>pincode :</strong>{loginuser.pincode}</span>
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
                                                    {/* <span className="login-name">Your First Name :</span>
                                                    <input type="text" placeholder="Enter Your First Name" className="p-2 mt-2 w-100" value={firstname} onChange={e => { setFirstname(e.target.value) }} />
                                                    <span className="login-name mt-3 d-block">Your Last Name :</span>
                                                    <input type="text" placeholder="Enter Your Last Name" className="p-2 mt-2 w-100" value={lastname} onChange={e => { setLastname(e.target.value) }} /> */}
                                                    {/* <span className="login-name mt-3 d-block">Your Email :</span>
                                                    <input type="email" name="email" placeholder="Enter Your Email" className="p-2 mt-2 w-100" value={email} onChange={e => { setEmail(e.target.value) }} /> */}
                                                    <span className="login-name mt-3 d-block">Your Address :</span>
                                                    <input type="text" placeholder="Enter Your Address" className="p-2 mt-2 w-100" value={address} onChange={e => { setAddress(e.target.value) }} />
                                                    <span className="login-name mt-3 d-block">Your Pincode :</span>
                                                    <input type="numeric" placeholder="Enter Your Pincode" className="p-2 mt-2 w-100" value={pincode} onChange={e => { setPincode(e.target.value) }} />
                                                </div>
                                                <div className="modal-footer">
                                                    <a href='/payment' onClick={updatedata} className="btn slidebtn">Submit</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="address mt-4 d-flex align-items-start">
                                  <i className="fa-solid fa-location-dot icon"></i>
                                  <div className="address-detail ms-4">
                                      <h5 className="d-block detail-title">shipping address</h5>
                                      <span className="login-name mt-3 d-block">Your Address :</span>
                                      <input type="text" placeholder="Enter Your Address" className="p-2 mt-2 w-100" />
                                      <span className="login-name mt-3 d-block">Your City :</span>
                                      <input type="text" placeholder="Enter Your City" className="p-2 mt-2 w-100" />
                                      <button className='btn slidebtn my-2'>Submit</button>
                                  </div>
                              </div> */}
                                <div className="payment-detail mt-4 d-flex flex-column">
                                    <h5 className="payment">payment mathod</h5>
                                    <a onClick={() => setPayActive("online")} className="mt-4 mx-4 d-flex align-items-center pay" style={{ cursor: 'pointer' }} >
                                        <span className="ms-3">Razorpay Secure (UPI, Cards, Wallets, NetBanking)</span>
                                        <div className='mx-2'>
                                            <img src="./images/upi.png" className="img-fluid mx-1" alt="phonepe" draggable="false" />
                                            <img src="./images/google.png" className="img-fluid mx-1" alt="phonepe" draggable="false" />
                                            <img src="./images/c2.png" className="img-fluid mx-1" alt="phonepe" draggable="false" />
                                            {/* <i className="fa-solid fa-credit-card mx-1"></i> */}
                                        </div>
                                    </a>
                                    <a onClick={() => setPayActive("cod")} className="mt-4 mx-4 d-flex align-items-center pay mb-5" style={{ cursor: 'pointer' }}>
                                        <span className="ms-3">Cash on Delivery</span>
                                    </a>
                                    <button onClick={handlePayment} className="mt-4 mx-4 my-3 btn slidebtn">
                                        Pay Now
                                    </button>
                                </div>
                            </div>
                            <div className="col-lg-5 col-md-5 order-detail">
                                <div className="your-order">
                                    <h5>your order</h5>
                                    {
                                        ucart && ucart.map((data) => {
                                            return (
                                                <>
                                                    <div className="youroder-details d-flex align-items-center">
                                                        <div className="pull-left">
                                                            <Link to={`/singleproduct/${data.product?._id}`}>
                                                                <img src={`http://localhost:5000/${data.product?.img}`} style={{ width: '100px' }} alt="Ring" className="img-fluid"
                                                                    draggable="false" />
                                                            </Link>
                                                        </div>
                                                        <div className="cartname">
                                                            <Link to={`/singleproduct/${data.product?._id}`} className="catpro-name" style={{ cursor: 'pointer' }}>
                                                                {data.product?.productname}
                                                            </Link>
                                                            <span className="d-block">Color: {data.product?.color}</span>
                                                            <span>Metal: {data.product?.metal}</span><br />
                                                            <span>Quantity: {data.quantity}</span>
                                                        </div>
                                                        <span className="order-price ms-auto">₹ {data.quantity * data.product.price}</span>
                                                    </div>
                                                    <hr />
                                                    {/* {
                                                        coupen && coupen.map((data) => {
                                                            return(
                                                                <>
                                                                   <span>{data.coupen_name}</span> 
                                                                </>
                                                            )
                                                        })
                                                  } */}

                                                </>
                                            )
                                        })
                                    }
                                    {/* <div className="discount d-flex align-items-center mt-2">
                                                  <input type="text" placeholder="Discount Code" className="px-3 py-2 w-100"/>
                                                      <button className="ms-3 slidebtn">Apply</button>
                                              </div> */}
                                    <div className="total mt-4">
                                        <table className="table table-bordered mb-0">
                                            <tbody>
                                                <tr>
                                                    <td className="text-start"><strong>Sub-total</strong></td>
                                                    <td className="text-end">₹ {subtotal}</td>
                                                </tr>
                                                <tr>
                                                    <td className="text-start"><strong>+ Shipping Charge</strong></td>
                                                    <td className="text-end">₹ 10</td>
                                                </tr>
                                                <tr>
                                                    <td className="text-start"><strong>Total</strong></td>
                                                    <td className="text-end">₹ {totalamount}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <Footer />
        </>
    )
}

export default Payment