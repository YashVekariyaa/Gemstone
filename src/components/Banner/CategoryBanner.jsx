import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from 'react-router-dom';

const CategoryBanner = () => {


    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        arrows: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 3,
                infinite: true,
              }
            },
            {
              breakpoint: 1000,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1
              }
            },
            {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              },
              {
                breakpoint: 0,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }

          ]
      };

  return (
    <>
          <section>
              <div className="product">
                  <div className="container py-5">
                      <h2 className="text-center mb-4">
                          <span>Our Categories</span>
                      </h2>
                      <Slider {...settings} id="category" className="owl-carousel owl-theme">
                          <div className="item paddingRight">
                              <div className="pro-img text-center">
                                  <Link to="products/Couple%20Ring">
                                      <img className="img-fluid" src="./images/category/ring-1.png" alt="Ring" draggable="false" />
                                  </Link>
                                  <div>
                                      <h5 className="text-uppercase text-center">Rings</h5>
                                  </div>
                              </div>
                          </div>
                          <div className="item paddingRight">
                              <div className="pro-img text-center">
                                  <Link to="products/Diamond%20Necklace">
                                      <img className="img-fluid" src="./images/category/necklase.png" alt="Necklace" draggable="false" />
                                  </Link>
                                  <div>
                                      <h5 className="text-uppercase text-center">Necklaces</h5>
                                  </div>
                              </div>
                          </div>
                          <div className="item paddingRight">
                              <div className="pro-img text-center">
                                  <Link to="products/Golden%20Earring">
                                      <img className="img-fluid" src="./images/category/ring-2.png" alt="Ring" draggable="false" />
                                  </Link>
                                  <div>
                                      <h5 className="text-uppercase text-center">Earrings</h5>
                                  </div>
                              </div>
                          </div>
                          <div className="item paddingRight">
                              <div className="pro-img text-center">
                                  <Link to="products/Diamond%20Bracelate">
                                      <img className="img-fluid" src="./images/category/braselate.png" alt="Bracelet" draggable="false" />
                                  </Link>
                                  <div>
                                      <h5 className="text-uppercase text-center">Bracelets</h5>
                                  </div>
                              </div>
                          </div>
                          <div className="item paddingRight">
                              <div className="pro-img text-center">
                                  <a href="">
                                      <img className="img-fluid" src="./images/category/braselate.png" alt="Bracelet" draggable="false" />
                                  </a>
                                  <div>
                                      <h5 className="text-uppercase text-center">Bracelets</h5>
                                  </div>
                              </div>
                          </div>
                      </Slider>
                  </div>
              </div>
          </section> 
    </>
  )
}

export default CategoryBanner