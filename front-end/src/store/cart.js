import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
  totalProducts: 0,
  showNotification: false,
  products: [],
  totalPrice: 0,
  productQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addItemToCart(state, action) {
      const newProduct = action.payload;
      const existingProduct = state.products.find(
        (item) => item.id === newProduct.id
      );
      state.totalProducts++;
      state.totalPrice=state.totalPrice+newProduct.price;
      if (!existingProduct) {
        state.products.push({
          id: newProduct.id,
          name: newProduct.name,
          image: newProduct.image,
          quantity: 1,
          price: newProduct.price,
        });
      } else {
        existingProduct.quantity++;
        existingProduct.totalPrice =
          existingProduct.totalPrice + newProduct.price;
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingProduct = state.products.find((product) => product.id === id);
      state.totalQuantity--;
      state.totalProducts--;
      state.totalPrice=state.totalPrice-existingProduct.price;
      if (existingProduct.quantity === 1) {
        state.products = state.products.filter((product) => product.id !== id);
      } else {
        existingProduct.quantity--;
        existingProduct.totalPrice = existingProduct.totalPrice - existingProduct.price;
      }
    },
    showNotification(state) {
      state.showNotification = true;
    },
    hideNotification(state) {
      state.showNotification = false;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
