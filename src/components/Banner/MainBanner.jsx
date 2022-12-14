import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from 'react-router-dom';

const MainBanner = () => {

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <>
      <div className="slider" style={{overflowX: 'hidden'}}>
        <Slider {...settings} id="slider" className="owl-carousel owl-theme" >
          <div className="banneritem">
            <div className="d-flex justify-content-end align-items-end flex-column">
              <div>
                <h5 className="fw-light text-uppercase">Best Collection</h5>
                <h3>Hand Made Pendant <br/> Necklace</h3>
                <p className="pb-4">Get 10% Discount on this festivals sit amet, consectetur adipisicing elit, sed do
                  eiusmod
                  tempor incididunt <br/> ut labore et dolore magna aliqua. Ut enim ad minim veniam. Labore et dolore magna
                    aliqua
                    tempor.</p>
                <Link to="/allproduct" className="slidebtn fw-bold text-uppercase f-14">Shop Now</Link>
              </div>
            </div>
          </div>
          <div className="banneritem2">
            <div className="d-flex justify-content-end align-items-end flex-column">
              <div >
                <h5 className="fw-light text-uppercase">Best Collection</h5>
                <h3>Hand Made Pendant <br/> Necklace</h3>
                <p className="pb-4">Get 10% Discount on this festivals sit amet, consectetur adipisicing elit, sed do
                  eiusmod
                  tempor incididunt <br/> ut labore et dolore magna aliqua. Ut enim ad minim veniam. Labore et dolore magna
                    aliqua
                    tempor.</p>
                <Link to="/allproduct" className="slidebtn fw-bold text-uppercase f-14">Shop Now</Link>
              </div>
            </div>
          </div>
        </Slider>
      </div>

      <div className="container my-5">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="service d-flex justify-content-center align-items-center">
              <h4>
                {/* <!-- <img src="./images/cash.png" className="mx-2 img-fluid" /> --> */}
                <i className="fa-solid fa-sack-dollar icon"></i>&nbsp;
              </h4>
              <h6 className="fw-bold text-uppercase">money back guarantee!</h6>
            </div>
            <h6 className="text-center mb-3">100% money back 20days</h6>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="service d-flex justify-content-center align-items-center">
              <h4>
                <i className="fa-solid fa-headphones icon"></i>&nbsp;
              </h4>
              <h6 className="fw-bold text-uppercase">premium support</h6>
            </div>
            <h6 className="text-center mb-3" >100% money back 20days</h6>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="service d-flex justify-content-center align-items-center">
              <h4>
                <i className="fa-solid fa-rocket icon"></i>&nbsp;
              </h4>
              <h6 className="fw-bold text-uppercase">free shipping</h6>
            </div>
            <h6 className="text-center mb-3" >100% money back 20days</h6>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="service d-flex justify-content-center align-items-center">
              <h4>
                <i className="fa-solid fa-credit-card icon"></i>&nbsp;
              </h4>
              <h6 className="fw-bold text-uppercase">secure payment</h6>
            </div>
            <h6 className="text-center mb-3">100% money back 20days</h6>
          </div>
        </div>
      </div> 
    </>
  )
}

export default MainBanner