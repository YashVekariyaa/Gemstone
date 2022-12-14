import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { remove } from '../redux/Slice/cartSlice'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { DeleteCart, GetCart, Order } from '../https/axios'


const Cart = () => {

    const dispatch = useDispatch();
    const [usercart, setUsercart] = useState([])
    const [totalamount, setTotalamount] = useState('')
    const [PaymentType, setPaymentType] = useState('')

    useEffect(() => {
        async function Carts() {
            const datacart = await GetCart()
            // console.log("Cart",datacart)
            setUsercart(datacart.data.cartdata)
        }
        Carts()
    }, [])
    // console.log("Cart", usercart)

    const deletecart = async (id,productId) => {
        try {
            dispatch(remove(productId))
            const cartdel = await DeleteCart(id)
            if (cartdel) {
                setUsercart(cartdel.data.data)
                toast("Item delete successfully", { theme: "dark", type: "success" })
            }
        } catch (error) {
            toast("Try Again", { theme: "dark", type: "error" })
        }
    }



    return (
        <>
            <Header />
            <div className="breadcrumbs_area mb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="breadcrumb_content">
                                <ul>
                                    <li><Link to="/">home</Link></li>
                                    <li><Link to="/account">Account</Link></li>
                                    <li>Cart</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="d-flex justify-content-center align-items-center">
                                <h3 className="fw-bold text-uppercase">Shopping Cart</h3>
                            </div>
                            <div className="container my-4">
                                {
                                    (usercart.length <= 0) ?
                                        <h1 className="text-center py-5">Your Shopping Cart is Empty</h1>
                                        :
                                        <>
                                            <div className="row d-flex justify-content-center align-items-center h-100">
                                                <div className="card">
                                                    <div className="card-body p-4">
                                                        <div className="row">
                                                            <div className="col-lg-12">
                                                                {
                                                                    usercart && usercart.map((data) => {
                                                                        return (
                                                                            <div className="card rounded-3 mb-3">
                                                                                <div className="card-body d-flex justify-content-between align-items-center">
                                                                                    <div className="row d-flex justify-content-between align-items-center">
                                                                                        <div className="col-md-2 col-lg-2 col-xl-2">
                                                                                            <Link to={`/singleproduct/${data.product?._id}`} ><img src={`http://localhost:5000/${data.product?.img}`} className="img-fluid rounded-3"
                                                                                                alt="Jewellary" draggable="false" /></Link>
                                                                                        </div>
                                                                                        <div className="col-md-2 col-lg-2 col-xl-2">
                                                                                            <p className="text-capitalize lead fw-normal mb-2">{data.product?.productname}</p>
                                                                                            {/* <p className="small mb-2">Qty: 2</p> */}
                                                                                        </div>
                                                                                        <div className="col-md-2 col-lg-2 col-xl-2">
                                                                                            <h5 className="mb-2 py-sm-2">Color: {data.product?.color}</h5>
                                                                                        </div>
                                                                                        <div className="col-md-2 col-lg-2 col-xl-2">
                                                                                            <h5 className="mb-2 py-sm-2">Metal: {data.product?.metal}</h5>
                                                                                        </div>
                                                                                        <div className="col-md-2 col-lg-2 col-xl-2">
                                                                                            <h5 className="mb-2 py-sm-2">Quantity: {data.quantity}</h5>
                                                                                        </div>
                                                                                        <div className="col-md-2 col-lg-2 col-xl-2">
                                                                                            <h5 className="mb-2 py-sm-2">₹ {data.quantity * data.product?.price}</h5>
                                                                                        </div>
                                                                                        
                                                                                        {/* <div className="col-md-2 col-lg-2 col-xl-2">
                                                                                            <button className="btn slidebtn">
                                                                                                Order Now
                                                                                            </button>
                                                                                        </div> */}
                                                                                    </div>
                                                                                    <div className="col-md-2 col-lg-1 col-xl-1">
                                                                                        <button onClick={() => deletecart(data._id, data)} className="btn">
                                                                                            <i className="fas fa-trash fa-lg facon"></i>
                                                                                        </button>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        )
                                                                    })
                                                                }
                                                            </div>
                                                        </div>
                                                        <div className="text-end mt-2">
                                                            <Link to="/payment" className="btn slidebtn">
                                                                Purchase
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Cart