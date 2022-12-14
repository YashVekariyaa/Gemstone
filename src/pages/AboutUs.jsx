import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'

const AboutUs = () => {
  return (
      <>  <Header />
          <div className="breadcrumbs_area mb-5">
              <div className="container">
                  <div className="row">
                      <div className="col-12">
                          <div className="breadcrumb_content">
                              <ul>
                                  <li><Link to="/">home</Link></li>
                                  <li>about us</li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <section>
              <div className="container">
                  <h2 className="about-txt pb-3 text-center text-capitalize fw-bold">about us</h2>
                  <p className="mt-3 mb-0">lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fusce aliquam, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <div className="about-shop">
                      <div className="row mt-4 d-flex align-items-center">
                          <div className="col-lg-6 col-md-12">
                              <img className="about-img img-fluid" src="./images/about-us/11.jpg" alt="Testimonial" draggable="false"/>
                          </div>
                          <div className="col-lg-6 col-md-12 mt-md-4 mt-sm-4 about-text about-headtxt">
                              <h6 className="shop-txt">about our shop</h6>
                              <p className="mt-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem </p>
                              <p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                                  dummy text ever since the 1500s.</p>
                          </div>
                      </div>
                  </div>
                  <div className="about-shop mb-3">
                      <div className="row mt-4 d-flex align-items-center">
                          <div className="col-lg-6 col-md-12 about-text">
                              <h6 className="shop-txt">about our shop</h6>
                              <p className="mt-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                                  been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
                                  type and scrambled it to make a type specimen book. It has survived not only five centuries, but also
                                  the leap into electronic typesetting,remaining essentially unchanged. It was popularised in the 1960s
                                  with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                                  publishing software like Aldus PageMaker including versions of Lorem </p>
                              <p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                                  been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
                                  type and scrambled it to make a type specimen book. It has survived not only five centuries, but also
                                  the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
                                  with the release of Letraset sheets containing Lorem Ipsum passages.Lorem Ipsum is simply dummy text of
                                  the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                                  dummy text ever since the 1500s.</p>
                          </div>
                          <div className="col-lg-6 col-md-12 mt-md-4 mt-sm-4 about-headimg">
                              <img className="about-img img-fluid" src="./images/about-us/12.jpg" alt="Testimonial" draggable="false"/>
                          </div>
                      </div>
                  </div>
              </div>
          </section>    
          <Footer />
      </>
  )
}

export default AboutUs