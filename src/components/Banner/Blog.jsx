import React from 'react'
import { Link } from 'react-router-dom'

const Blog = () => {
  return (
    <>
      <section>
        <div>
          <div className="container my-3">
            <h2 className="text-center mb-4">
              <span>Latest Blogs</span>
            </h2>
            <div className="row">
              <div className="col-md-4 col-sm-6">
                <a href="/blog" >
                  <div className="card border-0">
                    <img src="./images/blog/blog-1.png" className="img-fluid" alt="" />
                    <div className="card-body">
                      <small className="text-muted">Posted in Sep 15, 2020 by Switzi</small>
                      <h5 className="card-text fw-bold pt-2">Wear Your Earings Perfectly</h5>
                      <p>First we need to check all the luxury colors of the jewels which is the categories.</p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-md-4 col-sm-6">
                <a href="/blog" >
                  <div className="card border-0">
                    <img src="./images/blog/blog-2.png" className="img-fluid" alt="..." />
                    <div className="card-body">
                      <small className="text-muted">Posted in Sep 15, 2020 by Switzi</small>
                      <h5 className="card-text fw-bold pt-2">How Can You Choose Original Jewels</h5>
                      <p>First we need to check all the luxury colors of the jewels which is the categories.</p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-md-4 col-sm-6">
                <a href="/blog" >
                  <div className="card border-0">
                    <img src="./images/blog/blog-3.png" className="img-fluid" alt="..." />
                    <div className="card-body">
                      <small className="text-muted">Posted in Sep 15, 2020 by Switzi</small>
                      <h5 className="card-text fw-bold pt-2">How To Look Gorgeous With Jewels</h5>
                      <p>First we need to check all the luxury colors of the jewels which is the categories.</p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="container">
                <div className="d-flex justify-content-center align-items-center">
                  <a href="/blog" className="slidebtn fw-bold text-uppercase text-center f-14">View All</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Blog