import Header from './components/Header';
import AllBanner from './components/Banner/AllBanner';
import Home from './pages/Home';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import { Provider, useDispatch, useSelector } from 'react-redux';
import Account from './pages/Account';
import AccountInfo from './pages/AccountInfo';
import Login from './pages/Login';
import Register from './pages/Register';
import ResetPassword from './pages/ResetPassword';
import ChangePassword from './pages/ChangePassword';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Blog from './pages/Blog';
import Wishlist from './pages/Wishlist';
import Cart from './pages/Cart';
import Transaction from './pages/Orders';
import SingleProduct from './components/Product/SingleProduct';
import Payment from './pages/Payment';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AllProducts from './components/Product/AllProducts';
import Product from './pages/Product';
import Category from './components/Product/Category';
import store from './redux/store';
import { GetUser } from './https/axios';
import { setLogIn, setUser } from './redux/Slice/userSlice';
import { useEffect } from 'react';
import PaymentSuccess from './pages/PaymentSuccess';
import Orders from './pages/Orders';
import PaymentFail from './pages/PaymentFail';
import UserAddress from './pages/UserAddress';

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    async function fetchData() {
      const userdata = await GetUser()
      // console.log(userdata.data.token)
      if (userdata) {
        if (userdata.data.token === undefined) {
          dispatch(setLogIn(false))
        } else {
          dispatch(setUser(userdata.data))
          dispatch(setLogIn(true))
        }
      }
    }
    fetchData()
  }, [])

  return (
      <Router>
        <ToastContainer />
        <Routes>
          <Route exact path='/' element={<Home />} ></Route>
          <Route exact path='/login' element={<Login />} ></Route>
          <Route exact path='/allproduct' element={<Product />} ></Route>
          <Route exact path='/products/:subcategory' element={<Category />} ></Route>
          <Route exact path='/singleproduct/:id' element={<SingleProduct />} ></Route>
          <Route exact path='/account' element={<Account />} ></Route>
          <Route exact path='/accountinfo' element={<AccountInfo />} ></Route>
          <Route exact path='/login' element={<Login />} ></Route>
          <Route exact path='/register' element={<Register />} ></Route>
          <Route exact path='/resetpassword' element={<ResetPassword />} ></Route>
          <Route exact path='/changepassword' element={<ChangePassword  />} ></Route>
          <Route exact path='/aboutus' element={<AboutUs />} ></Route>
          <Route exact path='/contactus' element={<ContactUs />} ></Route>
          <Route exact path='/blog' element={<Blog />} ></Route>
          <Route exact path='/wishlist' element={<Wishlist />} ></Route>
          <Route exact path='/cart' element={<Cart />} ></Route>
          <Route exact path='/transaction' element={<Transaction />} ></Route>
          <Route exact path='/payment' element={<Payment />} ></Route>
          <Route exact path='/paymentsuccess' element={<PaymentSuccess />} ></Route>
          <Route exact path='/paymentfail' element={<PaymentFail />} ></Route>
          <Route exact path='/myorder' element={<Orders />} ></Route>
          <Route exact path='/myaddress' element={<UserAddress />} ></Route>
        </Routes>
      </Router>
  );
}

export default App;
