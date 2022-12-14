import axios from "axios";

const api = axios.create({
    // baseURL: "http://192.168.29.197:5000",
    baseURL: "http://localhost:5000",
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    withCredentials: true
})

export const Registeruser = (data) => api.post("api/register",data);
export const Loginuser = (data) => api.post("api/login",data);
export const ContactUser = (data) => api.post("api/contactus",data);
export const LogoutUser = (data) => api.post("api/logout",data);
export const Productd = () => api.get("api/produts");
export const ProductsData = (subcategory) => api.get(`api/productdata/${subcategory}`);
export const SingleProducts = (id) => api.get(`api/singleproduct/${id}`);
export const Categories = () => api.get("api/categories");
export const SubCategories = () => api.get("api/subcategories");
export const GetUser = () => api.get("/api");
export const UpdateUser = (data) => api.post("/api/updateusr",data);
export const GetCart = () => api.get("api/fetchcart");
export const PostCart = (id,data) => api.post(`/api/addtofav/${id}`,data);
export const DeleteCart = (id,data) => api.post(`/api/deletecart/${id}`,data);
export const PostWish = (id,data) => api.post(`/api/wishlist/${id}`,data);
export const GetWish = () => api.get("/api/fetchwishlist");
export const DeleteWish = (id,data) => api.post(`/api/deletewishlist/${id}`,data);
export const UserReview = (data) => api.post("/api/review",data);
export const Order = (data) => api.post("/api/orders",data);
export const DisplayOrder = () => api.get("/api/orderdetails");
export const Payments = (data) => api.post("/api/payment",data);
export const Verify = (data) => api.post("/api/verify",data);
export const EmailSubscriber = (data) => api.post("/api/newLatterInsert",data);
export const PassReset = (data) => api.post("/api/resetpassword",data);
export const PassChange = (data) => api.post("/api/changepassword",data);
export const DisplayReview = () => api.get("/api/getrieew");
export const DiscountCoupen = () => api.get("/api/getdiccount");
export const CancelOrder = (id,data) => api.post(`/api/cancelorder/${id}`,data);

