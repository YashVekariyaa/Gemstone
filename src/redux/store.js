import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './Slice/cartSlice'
import userReducer from "./Slice/userSlice";

const store = configureStore({
    reducer: {
        cart: cartReducer,
        userinfo: userReducer,
    }
});


export default store;