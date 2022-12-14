import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { PostCart, PostWish, Productd } from '../../https/axios'

const HomeProduct = () => {

    const [homeproducts, setHomeproducts] = useState('')
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        async function homedata(){
            const datahome = await Productd()
            // console.log("HomeProduct",datahome.data)
            setHomeproducts(datahome.data)
        } 
        homedata()
    }, [])

    const sendcart = async (id) => {
        try {
            const usercart = await PostCart(id,{quantity})
            if (usercart) {
                toast("Add to cart successfully", { theme: "dark", type: "success" })
            }
        } catch (error) {
            toast("Try Again", { theme: "dark", type: "error" })
        }
    }


    const sendwish = async (id) => {
        try {
            const userwish = await PostWish(id)
            if(userwish){
                toast("Add to wishlist successfully", { theme: "dark", type: "success" })
            }
        } catch (error) {
            toast("Try Again", { theme: "dark", type: "error" })
        }
    }
    

  return (
    <>
          <section>
              <div className="products">
                  <div className="container my-3">
                      <h2 className="text-center mb-4">
                          <span>Featured Collections</span>
                      </h2>
                      <div className="row">
                        {
                            homeproducts && homeproducts.map((data) => {
                                return (
                                    <div className="col-lg-3 col-md-4 col-sm-4">
                                        <Link to={`/singleproduct/${data._id}`}>
                                            <div className="product-img text-center">
                                                <img className="img-fluid w-100" src={`http://localhost:5000/${data.img}`} style={{height: '350px'}} draggable="false" />
                                                <div className="caption">
                                                    <h6 className="fw-bold">{data.productname}</h6>
                                                    <div className="price">
                                                        <span>₹ {data.price}</span>
                                                    </div>
                                                    <div className="button-group">
                                                        <Link onClick={() => sendcart(data._id, data)} className="cart-btn pro-btn text-center">
                                                            <svg>
                                                                <path
                                                                    d="M6.075 22.15q-.95 0-1.612-.675Q3.8 20.8 3.8 19.85V8.1q0-.95.663-1.613.662-.662 1.612-.662H7.85q.025-1.7 1.238-2.9 1.212-1.2 2.912-1.2t2.913 1.2q1.212 1.2 1.237 2.9h1.775q.95 0 1.613.662.662.663.662 1.613v11.75q0 .95-.662 1.625-.663.675-1.613.675Zm0-2.3h11.85V8.1H16.15v1.875q0 .475-.337.8-.338.325-.813.325-.475 0-.812-.325-.338-.325-.338-.8V8.1h-3.7v1.875q0 .475-.338.8-.337.325-.812.325-.475 0-.812-.325-.338-.325-.338-.8V8.1H6.075v11.75ZM10.15 5.825h3.7q0-.75-.55-1.288Q12.75 4 12 4t-1.3.537q-.55.538-.55 1.288ZM6.075 19.85V8.1v11.75Z" />
                                                            </svg>
                                                            <span className="d-none ms-2">Add to cart</span>
                                                        </Link>
                                                        <Link to={`/singleproduct/${data._id}`} className="quickview pro-btn text-center">
                                                            <svg>
                                                                <path
                                                                    d="M12 16q1.875 0 3.188-1.312Q16.5 13.375 16.5 11.5q0-1.875-1.312-3.188Q13.875 7 12 7q-1.875 0-3.188 1.312Q7.5 9.625 7.5 11.5q0 1.875 1.312 3.188Q10.125 16 12 16Zm0-1.925q-1.075 0-1.825-.75t-.75-1.825q0-1.075.75-1.825T12 8.925q1.075 0 1.825.75t.75 1.825q0 1.075-.75 1.825t-1.825.75Zm0 5.1q-3.725 0-6.762-2.088Q2.2 15 .825 11.5 2.2 8 5.238 5.912 8.275 3.825 12 3.825q3.725 0 6.763 2.087Q21.8 8 23.175 11.5 21.8 15 18.763 17.087 15.725 19.175 12 19.175Zm0-7.675Zm0 5.5q2.825 0 5.175-1.488 2.35-1.487 3.6-4.012-1.25-2.525-3.6-4.013Q14.825 6 12 6 9.175 6 6.825 7.487q-2.35 1.488-3.6 4.013 1.25 2.525 3.6 4.012Q9.175 17 12 17Z" />
                                                            </svg>
                                                            <span className="d-none ms-2">Quickview</span>
                                                        </Link>
                                                        <Link onClick={() => sendwish(data._id, data)} className="wishlist pro-btn text-center">
                                                            <svg>
                                                                <path
                                                                    d="m12 21.275-1.6-1.425q-2.55-2.3-4.212-3.963Q4.525 14.225 3.55 12.9q-.975-1.325-1.362-2.45Q1.8 9.325 1.8 8.15q0-2.45 1.625-4.075T7.5 2.45q1.3 0 2.463.525 1.162.525 2.037 1.5.85-.975 2.025-1.5Q15.2 2.45 16.5 2.45q2.425 0 4.062 1.625Q22.2 5.7 22.2 8.15q0 1.175-.388 2.288-.387 1.112-1.362 2.437-.975 1.325-2.65 3-1.675 1.675-4.225 3.975Zm0-3.075q2.375-2.15 3.925-3.663 1.55-1.512 2.438-2.65.887-1.137 1.224-2.012.338-.875.338-1.725 0-1.475-.975-2.45-.975-.975-2.45-.975-1.15 0-2.137.662-.988.663-1.363 1.688h-2q-.375-1.025-1.363-1.688-.987-.662-2.137-.662-1.475 0-2.45.975-.975.975-.975 2.45 0 .875.35 1.75t1.238 2q.887 1.125 2.425 2.65Q9.625 16.075 12 18.2Zm0-6.725Z" />
                                                            </svg>
                                                            <span className="d-none ms-2">Wishlist</span>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                )
                            })
                        }
                      </div>
                  </div>
                  <div className="container">
                      <div className="d-flex justify-content-center align-items-center">
                          <a className="slidebtn fw-bold text-uppercase text-center f-14" href="/allproduct">Shop Now</a>
                      </div>
                  </div>
              </div>
          </section>
    </>
  )
}

export default HomeProduct