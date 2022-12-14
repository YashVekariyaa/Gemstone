import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { DisplayReview, PostCart, SingleProducts, UserReview } from '../../https/axios'
import Footer from '../Footer'
import Header from '../Header'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Star from './Star'
import ReviewMessage from './ReviewMessage'
import { useDispatch } from 'react-redux'
import { add } from '../../redux/Slice/cartSlice'
import ReactImageMagnify from 'react-image-magnify';

const SingleProduct = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 4,
    }

    const { id } = useParams();
    const [data, setData] = useState('')
    const [count, setCount] = useState(1);

    const [name, setName] = useState('')
    const [message, setMessage] = useState('')
    const [review, setReview] = useState('')
    const [reviewcount, setReviewcount] = useState('')
    const [img, setImg] = useState([])

    const dispatch = useDispatch()

    useEffect(() => {
        async function fetchproduct() {
            const product = await SingleProducts(id)
            // console.log("SingleProduct", product.data.productinfo)
            setData(product.data.productinfo)
        }
        fetchproduct()
    }, [id])


    useEffect(() => {
        async function fetchreview() {
            const re = await DisplayReview()
            // console.log("review",re.data.Reviews[0].review)
            setReviewcount(re.data.Reviews[0].review)
        }
        fetchreview()
    }, [])
    // console.log("reviewcount",reviewcount)

   




    // function increment() {
    //     setCount(function (prevCount) {
    //         return (prevCount += 1);
    //     });
    // }


    // function decrement() {
    //     setCount(function (prevCount) {
    //         if (prevCount > 1) {
    //             return (prevCount -= 1);
    //         } else {
    //             return (prevCount = 1);
    //         }
    //     });
    // }

    const [quantity, setQuantity] = useState(1);
    

    const handleQuantity = (type) => {
        if (type === "dec") {
            quantity > 1 && setQuantity(quantity - 1);
        } else {
            setQuantity(quantity + 1);
        }
    };

    //   console.log("quantity",quantity)
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

    const sendData = async () => {
        if (!name || !message || !review) {
            toast("Reviews Not Added", { theme: "dark", type: "error" })
        } else {
            const insertReating = await UserReview({ name, message, review })
            if (insertReating) {
                setName('')
                setMessage('')
                setReview('')
                toast("Reviews Add successfully", { theme: "dark", type: "success" })

            }
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
                                    <li>{data.productname}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="product-page" className="container">
                <div className="row d-flex align-items-start order-1 order-md-0">
                    <div className="col-lg-6 col-md-6 col-xs-12">
                        <div className="cusDesign d-flex justify-content-center align-items-center">
                            {/* <img src={`http://localhost:5000/${data.img}`} className="img-fluid img-src big-img" id="imagechange"
                                alt="Festive Favorites" draggable="false" /> */}
                            <ReactImageMagnify {...{
                                smallImage: {
                                    isFluidWidth: true,
                                    src: `http://localhost:5000/${data.img}`,
                                    sizes: '(min-width: 430px) (height: 100%)'
                                },
                                largeImage: {
                                    src: `http://localhost:5000/${data.img}`,
                                    width: 1200,
                                    height: 1800
                                },
                                // enlargedImageContainerDimensions: {
                                //     width: '100%',
                                //     height: '100%'
                                // }
                            }} />   

                        </div>
                        <div class="zoom-thumb">
                            <Slider {...settings} id="gallery" class="owl-carousel owl-theme mt-3">
                                <li class="item text-center">
                                    <a class="card">
                                        <img src={`http://localhost:5000/${data.gallaryimg}`} class="img-fluid img-src" id="imagechange"
                                            alt="Festive Favorites" draggable="false" />
                                    </a>
                                </li>
                            </Slider>
                        </div>
                        {/* <Slider {...settings} className="mt-3">
                            <li className="item text-center">
                                <a className="card">
                                    <img src={`http://localhost:5000/${data.gallaryimg}`} className="img-fluid img-src w-100"
                                        id="imagechange" alt="Festive Favorites" draggable="false" />
                                </a>
                            </li>
                        </Slider> */}
                    </div>
                    <div className="col-lg-6 col-md-6 col-xs-12 pro-content">
                        <h4 className="text-capitalize">{data.productname}</h4>
                        <hr className="producthr" />
                        <div className="rating">
                            <li className="d-inline-block">
                                <a href="#tab-review">
                                    <Star stars={reviewcount} />
                                </a>
                            </li>&nbsp;
                            <li className="d-inline-block">
                                <a id="ratecount" href="#tab-review">({reviewcount} reviews)</a>
                            </li>
                        </div>
                        <hr className="producthr" />
                        <div className="pro_count product-price">
                            <ul className="list-unstyled d-flex align-items-end">
                                <li className="text-decor-bold">
                                    <h2 className="price-new">₹ {data.price * quantity}</h2>
                                </li>
                                {/* <li className="price-old ps-2">
                                          <span>₹ 6,999.00</span>
                                      </li> */}
                            </ul>
                        </div>
                        {/* <div className="color-size pt-2">
                                  <div className="size mt-3">
                                      <h6 className="mb-2 fw-bold">Size :</h6>
                                      <div className="color-code d-flex align-items-center sizebox">
                                          <select>
                                              <option value="">Select Size</option>
                                              <option value="">07</option>
                                              <option value="">08</option>
                                              <option value="">09</option>
                                              <option value="">10</option>
                                              <option value="">11</option>
                                              <option value="">12</option>
                                              <option value="">13</option>
                                              <option value="">14</option>
                                              <option value="">15</option>
                                          </select>
                                      </div>
                                  </div>
                              </div> */}
                        <div className="qty-name mt-4">
                            <h6 className="mb-2 fw-bold">Quantity :</h6>
                            <button onClick={() => handleQuantity("dec")} className="down">-</button>
                            <button className="number">{quantity}</button>
                            <button onClick={() => handleQuantity("inc")} className="down">+</button>
                        </div>
                        <div className="qty-name mt-4 d-flex">
                            <h6 className="mb-2 fw-bold me-2">Color :</h6>
                            <h6>{data.color}</h6>
                        </div>
                        <div className="qty-name mt-4 d-flex">
                            <h6 className="mb-2 fw-bold me-2">Metal :</h6>
                            <h6>{data.metal}</h6>
                        </div>
                        <div className="add-cart qty-name mt-3">
                            <button onClick={() => sendcart(data._id, data)} className="btn slidebtn text-uppercase">
                                Add to cart
                            </button>
                        </div>
                    </div>
                </div>

                <div className="product-tab mt-5">
                    <div className="tab-content">
                        <h5>Description</h5>
                        <div className="tab-pane" id="tab-description">
                            <p className="mb-0">{data.description}</p>
                        </div>
                        <h5 id="tab-review">Reviews ({reviewcount}) </h5>
                        <div className="tab-pane">
                            <div className="form-review">
                                <div className="-pro-review">
                                    <ReviewMessage />
                                    <h6 className="co-heading mb-3">Write a review</h6>
                                    <div className="form-group required mb-3">
                                        <h6 htmlFor="input-name">Your Name :</h6>
                                        <input type="text" value={name} onChange={e => { setName(e.target.value) }} id="input-name" className="form-control" />
                                    </div>
                                    <div className="form-group required mb-3">
                                        <h6 htmlFor="input-name">Your Review :</h6>
                                        <textarea type="text" value={message} onChange={e => { setMessage(e.target.value) }} rows="5" id="input-review" className="form-control"></textarea>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <div>Rating : </div>
                                        <div className="star-rating">
                                            <input id="star-5" type="radio" name="rating" value={5} onClick={(e) => setReview(e.target.value)} />
                                            <label htmlFor="star-5" title="5 stars">
                                                <i className="active fa fa-star" aria-hidden="true"></i>
                                            </label>
                                            <input id="star-4" type="radio" name="rating" value={4} onClick={(e) => setReview(e.target.value)} />
                                            <label htmlFor="star-4" title="4 stars">
                                                <i className="active fa fa-star" aria-hidden="true"></i>
                                            </label>
                                            <input id="star-3" type="radio" name="rating" value={3} onClick={(e) => setReview(e.target.value)} />
                                            <label htmlFor="star-3" title="3 stars">
                                                <i className="active fa fa-star" aria-hidden="true"></i>
                                            </label>
                                            <input id="star-2" type="radio" name="rating" value={2} onClick={(e) => setReview(e.target.value)} />
                                            <label htmlFor="star-2" title="2 stars">
                                                <i className="active fa fa-star" aria-hidden="true"></i>
                                            </label>
                                            <input id="star-1" type="radio" name="rating" value={1} onClick={(e) => setReview(e.target.value)} />
                                            <label htmlFor="star-1" title="1 star">
                                                <i className="active fa fa-star" aria-hidden="true"></i>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="text-end">
                                        <button onClick={sendData} className="btn slidebtn">Continue</button>
                                    </div>
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

export default SingleProduct