import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { CancelOrder, DisplayOrder } from '../https/axios'

const Orders = () => {

    const [order, setOrder] = useState([])

    const cancelOrder = async (id) => {
        try {
            const ordercancel = await CancelOrder(id)
            if(ordercancel){
                toast("Order Canceled Sucessfully", { theme: "dark", type: "success" })
            }
        } catch (error) {
            toast("Order not canceled", { theme: "dark", type: "error" })
        }
    }    

    useEffect(() => {
        async function MyOrder(){
            const Order = await DisplayOrder()
            console.log("Orders",Order.data.cartdata)
            setOrder(Order.data.cartdata)
        }
        MyOrder()
    }, [])

    const createDate = (date) => {
        const day = new Date(date).getDate()
        const month = new Date(date).getMonth() + 1
        const year = new Date(date).getFullYear()
        return `${day}-${month}-${year}`
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
                                  <li><Link to="/account">Account</Link></li>
                                  <li>Orders</li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <section>
              <div className="container">
                  <div className="row d-flex justify-content-center align-items-center h-100">
                      <div className="col-12 mb-5">
                          <div className="d-flex justify-content-center align-items-center mb-4">
                              <h3 className="mb-0 text-black text-center fw-bold text-uppercase">Your Orders</h3>
                          </div>
                            {
                                (order.length <= 0) ?
                                <h1 className="text-center py-5">No Order Found</h1>
                                :
                                <>
                                    {
                                        order && order.map((data) => {
                                            return (
                                                <>
                                                <div className="card p-4">
                                                    <div className="card rounded-3 mb-4">
                                                        <div className="card-body p-4">
                                                            <div className="row d-flex justify-content-between align-items-center h-100">
                                                                <div className="col-md-2 col-lg-2 col-xl-2">
                                                                    <img src={`http://localhost:5000/${data.pid?.img}`} className="img-fluid rounded-3" alt="Jewellary" draggable="false" />
                                                                </div>
                                                                <div className="col-md-2 col-lg-2 col-xl-2">
                                                                    <p className="lead fw-normal mb-2">{data.pid?.productname}</p>
                                                                </div>
                                                                <div className="col-md-2 col-lg-2 col-xl-2">
                                                                    <h5 className="mb-2 py-sm-2">₹ {data.pid?.price}</h5>
                                                                </div>
                                                                <div className="col-md-2 col-lg-2 col-xl-2">
                                                                    <h5 className="mb-2 py-sm-2">{createDate(data.createdAt)}</h5>
                                                                </div>
                                                                <div className="col-md-2 col-lg-2 col-xl-2">
                                                                    <h5 className="mb-2 py-sm-2">{data.PaymentType}</h5>
                                                                </div>
                                                                <div className="col-md-2 col-lg-2 col-xl-2">
                                                                    <button onClick={() => cancelOrder(data.pid?._id,data)} className="btn slidebtn">Cancel Order</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                    </div>
                                                </>
                                            )
                                        })
                                    }
                                </>
                            }
                      </div>
                  </div>
              </div>
          </section>




        <Footer/>
    </>
  )
}

export default Orders