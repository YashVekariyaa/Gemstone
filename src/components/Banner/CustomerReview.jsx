import React from 'react'
import Slider from 'react-slick';

const CustomerReview = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
              breakpoint: 1000,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 3,
                infinite: true,
              }
            },
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 600,
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
              },
          ]
      };

    return (
        <>
            <section>
                <div className="testimonial">
                    <div className="container my-5">
                        <h2 className="text-center mb-4">
                            <span>Our Testimonial</span>
                        </h2>
                        <Slider {...settings} id="testi" className="owl-carousel owl-theme">
                            <div className="item">
                                <div className="test-con d-flex justify-content-center align-items-center flex-column">
                                    <img className="img-fluid py-3 rounded-circle" src="./images/testimonial/1.png" alt="Testimonial" draggable="false"/>
                                        <div>
                                            <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in.</p>
                                            <h5 className="fw-bold text-center">- Tom Lee</h5>
                                        </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="test-con d-flex justify-content-center align-items-center flex-column">
                                    <img className="img-fluid py-3 rounded-circle" src="./images/testimonial/2.png" alt="Testimonial" draggable="false"/>
                                        <div>
                                            <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in.</p>
                                            <h5 className="fw-bold text-center">- Alisa Roy</h5>
                                        </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="test-con d-flex justify-content-center align-items-center flex-column">
                                    <img className="img-fluid py-3 rounded-circle" src="./images/testimonial/3.png" alt="Testimonial" draggable="false"/>
                                        <div>
                                            <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in.</p>
                                            <h5 className="fw-bold text-center">- Bina Tee</h5>
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

export default CustomerReview