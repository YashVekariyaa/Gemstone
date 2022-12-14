import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { DeleteWish, GetWish, PostCart } from '../https/axios'


const Wishlist = () => {


    const [wishlist, setWishlist] = useState([])
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
       async function Wish(){
            const wishdata = await GetWish()
            console.log("Wishlist",wishdata.data.cartdata)
            setWishlist(wishdata.data.cartdata)
       } 
       Wish()
    }, [])


    const sendcart = async (id) => {
        try {
            const usercart = await PostCart(id, { quantity })
            if (usercart) {
                toast("Add to cart successfully", { theme: "dark", type: "success" })
            }
        } catch (error) {
            toast("Try Again", { theme: "dark", type: "error" })
        }
    }
    

    const deletewish = async (id) => {
        try {
            // dispatch(remove(productId))
            const wishdel = await DeleteWish(id)
            if(wishdel){
                setWishlist(wishdel.data.data)
                toast("Item deleted successfully", { theme: "dark", type: "success" })
            }
        } catch (error) {
            toast("Try Again", { theme: "dark", type: "error" })
        }
    }

    const handleQuantity = (type) => {
        if (type === "dec") {
            quantity > 1 && setQuantity(quantity - 1);
        } else {
            setQuantity(quantity + 1);
        }
    };

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
                                  <li>Wishlist</li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <section>
              <div className="container">
                  <div className="row d-flex justify-content-center align-items-center h-100">
                      <div className="col-12">
                          <div className="d-flex justify-content-center align-items-center mb-4">
                              <h3 className="mb-0 text-black text-center fw-bold text-uppercase">Wishlist</h3>
                          </div>
                          {
                            (wishlist.length <= 0) ?
                              <h1 className="text-center py-5">Your Wishlist is Empty</h1>
                              :
                              <>
                                  {
                                      wishlist && wishlist.map((data) => {
                                          return (
                                              <div className="card p-4 mb-3">
                                                  <div className="card rounded-3 mb-4">
                                                      <div className="card-body p-4">
                                                          <div className="row d-flex justify-content-between align-items-center h-100">
                                                              <div className="col-md-2 col-lg-2 col-xl-2">
                                                                 <Link to={`/singleproduct/${data.product?._id}`}> <img src={`http://localhost:5000/${data.product?.img}`} className="img-fluid rounded-3" alt="Jewellary" /></Link>
                                                              </div>
                                                              <div className="col-md-2 col-lg-2 col-xl-2">
                                                                  <p className="lead fw-normal mb-2">{data.product?.productname}</p>
                                                              </div>
                                                              {/* <div className="col-md-2 col-lg-2 col-xl-2">
                                                                <h5 className="mb-2 py-sm-3">in Stock</h5>
                                                            </div> */}
                                                              <div className="col-md-2 col-lg-2 col-xl-2">
                                                                  <h5 className="mb-2 py-sm-2">₹ {data.product?.price}</h5>
                                                              </div>
                                                              <div className="col-md-2 col-lg-2 col-xl-2">
                                                                  <button onClick={() => sendcart(data.product?._id, data)} className="wish-cart mt-sm-2">
                                                                      Add to cart
                                                                  </button>
                                                              </div>
                                                              <div className="col-md-1 col-lg-1 col-xl-1">
                                                                  <button onClick={() => deletewish(data._id,data)} className="btn"><i className="fas fa-trash fa-lg facon"></i></button>
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
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

export default Wishlist