import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart";
import favouriteReducer from "./favourite";
import updateReducer from './updateProduct';
import authReducer from './auth';
const store = configureStore({
  reducer: {
    cart: cartReducer,
    favourite:favouriteReducer,
    updateProduct:updateReducer,
    auth:authReducer,
  },
});

export default store;
