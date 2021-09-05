import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart";
import favouriteReducer from "./favourite";
import updateReducer from './updateProduct';
const store = configureStore({
  reducer: {
    cart: cartReducer,
    favourite:favouriteReducer,
    updateProduct:updateReducer
  },
});

export default store;
