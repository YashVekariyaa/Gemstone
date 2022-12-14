import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Categories, LogoutUser, ProductsData, SubCategories, Subcates } from '../https/axios'
import { useDispatch, useSelector } from 'react-redux'
import { setLogIn, setUser } from '../redux/Slice/userSlice'

const HeaderTwo = ({products, setFilteredData}) => {
   const { isLoggedIn } = useSelector((state) => state.userinfo) 
   const [category, setCategory] = useState('') 
   const [subcategory, setSubcategory] = useState('')
   const [cate, setCate] = useState({})
   const [search, setSearch] = useState("")
   const navigate = useNavigate()
   const dispatch = useDispatch()
   
 
   const signout = () => {
        const logout = LogoutUser()
        dispatch(setLogIn(false))
        dispatch(setUser(''))
        navigate("/login")
        toast("Logout Successfully", { type: 'success', theme: "dark" })
   } 

   useEffect(() => {
     async function cat(){
        const cat = await Categories({})
        // console.log("Categories",cat.data.category)
        setCategory(cat.data.category)
     }
     cat()
   }, [])

//    useEffect(() => {
//     async function cata(){
//        const cataa = await SubCategories({})
//     //    console.log("SubCate",cataa.data.category)
//     //    console.log("Categories2",cataa.data.category)
//     //    setSubcategory(cataa.data.category)
//     }
//     cata()
//   }, [])

  

   const onsub = async(data) => {
        const subcate = await SubCategories({})
        const subcategories = subcate.data.subcategory
        setSubcategory(subcate.data.subcategory)
        const na = subcategories.filter((item) => {
            return item.category === data
        })
        setCate(na)
    }
    
   const changeSearch = async(e) => {
        setSearch(e.target.value)
        const filterdatas = products.filter(item => item.productname.toLowerCase().includes(e.target.value.toLowerCase()))
        console.log("FilterSearch",filterdatas)
        setFilteredData(filterdatas)
   }
   
    return (
    <>
          <section className="header">
              <div className="nav">
                  <div className="container" style={{cursor: "pointer"}}>
                      <div className="row">
                          <div className="d-flex justify-content-between align-items-center">
                              <div className="nav-top">
                                  <a className="f-14 font-weight-bold text-dark text-decoration-none px-lg-2">Call: +955 9457 3948</a>
                                  <a className="f-14 font-weight-bold text-dark text-decoration-none">Email: support@gemstone.com</a>
                              </div>
                              <div className="d-flex currency">
                                  {/* <div className="dropdown">
                                      <a className="f-14 dropdown-toggle text-dark text-decoration-none" type="button" id="dropdownMenuButton1"
                                          data-bs-toggle="dropdown" aria-expanded="false">
                                          India
                                      </a>
                                      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                          <li><a className="dropdown-item" href="#">USD</a></li>
                                          <li><a className="dropdown-item" href="#">Pound</a></li>
                                          <li><a className="dropdown-item" href="#">EURO</a></li>
                                      </ul>
                                  </div>&nbsp;&nbsp; */}
                                  <div className="nav-top">
                                      {/* <!-- <a className="font-weight-bold text-dark text-decoration-none px-2"><i className="fa-solid fa-heart"></i> Wish List</a> --> */}
                                      <Link className="f-14 font-weight-bold text-dark text-decoration-none px-2" to="/account"><i className="fa-solid fa-user"></i> My
                                          Account</Link>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <hr style={{width: "100%"}} />
              <div className="header-primary-container head-sti">
                  <div className="header-primary header container">
                      <div className="row flex-column flex-lg-row">
                          <div className="col-lg-4 mx-auto  order-3 order-lg-0">
                              {/* <form className="search-bar">
                                  <div className="d-flex justify-content-center align-iteams-center">
                                      <i className="fa-solid fa-magnifying-glass pe-2 sea-icon"></i>
                                      <input type="text" id="search" value={search} onChange={e => changeSearch(e)} placeholder="Search..." autoComplete="off" className="w-100"/>
                                  </div>
                              </form> */}
                          </div>
                          <div className="col-lg-4 d-flex my-3 my-lg-0 order-2 order-lg-2">
                              <Link to="/" className="mx-auto">
                                  <img src="/images/logo.png" draggable="false" alt="Brand Logo" className="img-fluid"/>
                              </Link>
                          </div>
                          <div className="col-lg-4 d-flex justify-content-center justify-content-lg-end align-items-center order-lg-3">
                              <div className="menu px-lg-3">
                                    <ul>
                                        <li className="nav-item">
                                            {
                                                isLoggedIn === true ?
                                                    <a className="btn" onClick={signout}>Logout
                                                    </a>
                                                    :
                                                    <a className="btn" href="/login">Login
                                                    </a>
                                            }
                                        </li>
                                    </ul>
                              </div>
                              <div className="cart ms-auto ms-lg-0">
                                  <div className="add-to-cart">
                                      <Link to="/wishlist">
                                          <i className="fa-regular fa-heart f-20"></i>
                                      </Link>
                                  </div>
                              </div>
                              <div className="menu px-lg-3">
                                  <ul>
                                      <li className="nav-item">
                                          <Link to="/cart"><i className="fa-solid fa-cart-shopping bag f-20"></i>
                                          </Link>
                                      </li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="navbar navbar-expand-lg">
                  <div className="container d-flex justify-content-between align-items-center">
                      <a className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                          <span><i className="fas fa-bars"></i></span>
                      </a>
                      <div className="collapse navbar-collapse" id="navbarSupportedContent">
                          <ul className="navbar-nav d-flex justify-content-center align-items-center">
                              {
                                  category && category.map((data) => {
                                      return (
                                          <li className="nav-item dropdown">
                                              <a onClick={() => {onsub(data.category)}} className="nav-link text-dark f-16 dropdown-toggle px-xl-4 px-lg-3 px-md-2" href="#" id="navbarDropdown"
                                                  role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                  {data.category} <i className="fa-solid fa-caret-down"></i>
                                              </a>
                                              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                  {
                                                      cate[0] && cate.map((data) => {
                                                          return (
                                                              <>
                                                                  <Link to={`/products/${data.subcategory}`} className="dropdown-item f-16">{data.subcategory}</Link>
                                                                  {/* <div className="dropdown-divider mx-auto" style={{ width: "90%" }}></div> */}
                                                              </>
                                                          )
                                                      })
                                                  }
                                              </ul>
                                          </li>
                                      )
                                  })
                              }
                              {/* <li className="nav-item dropdown">
                                  <a className="nav-link text-dark f-16 dropdown-toggle px-xl-4 px-lg-3 px-md-2" href="#" id="navbarDropdown"
                                      role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                      Bracelets <i className="fa-solid fa-caret-down"></i>
                                  </a>
                                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                      <a href="html/category.html" className="dropdown-item f-16">Bracelet</a>
                                      <div className="dropdown-divider mx-auto" style={{width: "90%"}}></div>
                                      <a href="html/category.html" className="dropdown-item f-16">Bangle</a>
                                      <div className="dropdown-divider mx-auto" style={{width: "90%"}}></div>
                                  </ul>
                              </li>
                              <li className="nav-item dropdown">
                                  <a className="nav-link text-dark f-16 dropdown-toggle  px-xl-4 px-lg-3 px-md-2" href="#" id="navbarDropdown"
                                      role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                      Pandant <i className="fa-solid fa-caret-down"></i>
                                  </a>
                                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                      <a href="html/category.html" className="dropdown-item f-16">All Pandant</a>
                                      <div className="dropdown-divider mx-auto" style={{width: "90%"}}></div>
                                      <a href="html/category.html" className="dropdown-item f-16">GOD Pandant</a>
                                      <div className="dropdown-divider mx-auto" style={{width: "90%"}}></div>
                                      <a href="html/category.html" className="dropdown-item f-16">Ginney Pandant</a>
                                  </ul>
                              </li>
                              <li className="nav-item dropdown">
                                  <a className="nav-link text-dark f-16 dropdown-toggle  px-xl-4 px-lg-3 px-md-2" href="#" id="navbarDropdown"
                                      role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                      Light weight <i className="fa-solid fa-caret-down"></i>
                                  </a>
                                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                      <a href="html/category.html" className="dropdown-item f-16">Ladies Rings</a>
                                      <div className="dropdown-divider mx-auto" style={{width: "90%"}}></div>
                                      <a href="html/category.html" className="dropdown-item f-16">Pandant</a>
                                      <div className="dropdown-divider mx-auto" style={{width: "90%"}}></div>
                                      <a href="html/category.html" className="dropdown-item f-16">Tops</a>
                                      <div className="dropdown-divider mx-auto" style={{width: "90%"}}></div>
                                      <a href="html/category.html" className="dropdown-item f-16">3 Pcs set</a>
                                      <div className="dropdown-divider mx-auto" style={{width: "90%"}}></div>
                                  </ul>
                              </li>
                              <li className="nav-item">
                                  <a className="nav-link active text-dark f-16  px-xl-4 px-lg-3 px-md-2" aria-current="page"
                                      href="#">Mangalsutra</a>
                              </li>
                              <li className="nav-item dropdown">
                                  <a className="nav-link text-dark f-16 dropdown-toggle px-xl-4 px-lg-3 px-md-2" href="#" id="navbarDropdown"
                                      role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                      Alphabet <i className="fa-solid fa-caret-down"></i>
                                  </a>
                                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                      <a href="html/category.html" className="dropdown-item f-16">Ring</a>
                                      <div className="dropdown-divider mx-auto" style={{width: "90%"}}></div>
                                      <a href="html/category.html" className="dropdown-item f-16">Pendant Set</a>
                                  </ul>
                              </li>
                              <li className="nav-item">
                                  <a className="nav-link active text-dark f-16  px-xl-4 px-lg-3 px-md-2" aria-current="page"
                                      href="#">Mangalsutra</a>
                              </li>
                              <li className="nav-item dropdown">
                                  <a className="nav-link text-dark f-16 dropdown-toggle px-xl-4 px-lg-3 px-md-2" href="#" id="navbarDropdown"
                                      role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                      Alphabet <i className="fa-solid fa-caret-down"></i>
                                  </a>
                                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                      <a href="html/category.html" className="dropdown-item f-16">Ring</a>
                                      <div className="dropdown-divider mx-auto" style={{width: "90%"}}></div>
                                      <a href="html/category.html" className="dropdown-item f-16">Pendant Set</a>
                                  </ul>
                              </li> */}
                          </ul>
                      </div>
                  </div>
              </div>
          </section>
    </>
  )
}

export default HeaderTwo