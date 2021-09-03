import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart";
import favouriteReducer from "./favourite";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    favourite:favouriteReducer
  },
});

export default store;
