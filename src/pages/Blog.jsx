import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'

const Blog = () => {
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
                                  <li>Blog</li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <div className="single-blog">
              <div className="container">
                  <div className="row d-flex align-items-center mt-lg-5 mt-3 pb-3">
                      <div className="col-lg-6">
                          <div className="single-blog-img">
                              <img src="./images/blog/blog-1.png" className="w-100 img-fluid" alt="Blog" draggable="false"/>
                          </div>
                      </div>
                      <div className="col-lg-6 mt-lg-0 mt-3">
                          <div className="single-blog-contact">
                              <h5>shop this look</h5>
                              <span className="mt-3 d-block">17 september, 2022</span>
                              <p className="blog-description mt-3 mb-0">
                                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id consectetur massa, in commodo velit. Proin vitae
                                  cursus nunc. Nam convallis varius posuere. Mauris eu aliquet elit. In vehicula nulla turpis, vitae mollis urna rhoncus
                                  nec. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse mattis, nibh ac
                                  porta eleifend, sapien sem dictum nisl, ac dapibus risus dolor vel erat. Nam ac ex tellus. Nam aliquet, nisl ut aliquet
                                  condimentum, sapien nisi ultricies lorem, a suscipit velit felis nec ante. Morbi eget ullamcorper dolor. Aliquam erat
                                  volutpat. Integer id libero in turpis volutpat bibendum vel id massa. Suspendisse imperdiet laoreet posuere. Aliquam tincidunt nunc vitae sagittis tempor. Nullam et ex et felis porta
                                  sagittis non in lectus. Duis efficitur neque urna, at fermentum nulla malesuada nec. Interdum et malesuada fames ac ante
                                  ipsum primis in faucibus. Fusce sit amet tempor turpis. Mauris a nisl nec quam pulvinar elementum. Fusce tempus, risus
                                  id iaculis accumsan, arcu risus elementum elit, ac consequat augue tortor in ligula. Cras ut cursus dolor. Aenean
                                  venenatis metus tempus molestie tempus.
                              </p>
                          </div>
                      </div>

                      <div className="col-lg-6 mt-lg-5 mt-3">
                          <div className="single-blog-img">
                              <img src="./images/blog/blog-2.png" className="w-100 img-fluid" alt="Blog" draggable="false"/>
                          </div>
                      </div>
                      <div className="col-lg-6 mt-lg-5 mt-3">
                          <div className="single-blog-contact">
                              <h5>Morbi vel risus</h5>
                              <span className="mt-3 d-block">20 august, 2022</span>
                              <p className="blog-description mt-3 mb-0">
                                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id consectetur massa, in commodo velit. Proin
                                  vitae
                                  cursus nunc. Nam convallis varius posuere. Mauris eu aliquet elit. In vehicula nulla turpis, vitae mollis urna
                                  rhoncus
                                  nec. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse mattis,
                                  nibh ac
                                  porta eleifend, sapien sem dictum nisl, ac dapibus risus dolor vel erat. Nam ac ex tellus. Nam aliquet, nisl ut
                                  aliquet
                                  condimentum, sapien nisi ultricies lorem, a suscipit velit felis nec ante. Morbi eget ullamcorper dolor. Aliquam
                                  erat
                                  volutpat. Integer id libero in turpis volutpat bibendum vel id massa. Suspendisse imperdiet laoreet posuere.
                                  Aliquam tincidunt nunc vitae sagittis tempor. Nullam et ex et felis porta
                              </p>
                          </div>
                      </div>

                      <div className="col-lg-6 mt-lg-5 mt-3">
                          <div className="single-blog-img">
                              <img src="./images/blog/blog-3.png" className="w-100 img-fluid" alt="Blog" draggable="false"/>
                          </div>
                      </div>
                      <div className="col-lg-6 mt-lg-5 mt-3">
                          <div className="single-blog-contact">
                              <h5>Pellentesque non</h5>
                              <span className="mt-3 d-block">25 july, 2022</span>
                              <p className="blog-description mt-3 mb-0">
                                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id consectetur massa, in commodo velit. Proin
                                  vitae
                                  cursus nunc. Nam convallis varius posuere. Mauris eu aliquet elit. In vehicula nulla turpis, vitae mollis urna
                                  rhoncus
                                  nec. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse mattis,
                                  nibh ac
                                  porta eleifend, sapien sem dictum nisl, ac dapibus risus dolor vel erat. Nam ac ex tellus. Nam aliquet, nisl ut
                                  aliquet
                                  condimentum, sapien nisi ultricies lorem, a suscipit velit felis nec ante. Morbi eget ullamcorper dolor. Aliquam
                                  erat
                              </p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>


          <Footer/>
    </>
  )
}

export default Blog