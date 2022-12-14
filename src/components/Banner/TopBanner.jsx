import React from 'react'
import { Link } from 'react-router-dom'

export const TopBanner = () => {
  return (
    <>
          <section>
              <div className="container my-5">
                  <div className="row">
                      <div className="col-lg-6">
                          <div className="banner-img-1 d-flex justify-content-center align-items-center flex-column mb-2">
                              <div className="banner-title-1 fw-light">Get upto <span className="fw-bold price">25% Off</span></div>
                              <h2 className="Banner-text my-2">Beautiful Pendant</h2>
                              <div>
                                  <Link to="/products/Diamond%20Necklace" className="btn btn-outline-dark text-uppercase fw-bold rounded-0 f-14 mt-2">Shop Now</Link>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-6">
                          <div className="banner-img-2 d-flex justify-content-center align-items-center flex-column mb-2">
                              <div className="banner-title-1 fw-light">From Our <span className="fw-bold price">Best Collection</span></div>
                              <h2 className="Banner-text my-2">Earring Collections</h2>
                              <div>
                                  <Link to="/products/Golden%20Earring" className="btn btn-outline-dark text-uppercase fw-bold rounded-0 f-14 mt-2">Shop Now</Link>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>

          <section>
              <div className="container my-5 text-center">
                  <h2 className="pb-4">About Store</h2>
                  <h6 className="text-uppercase fw-bold">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor in</h6>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
              </div>

          </section>
    </>
  )
}
