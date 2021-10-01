import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
  totalProducts: 0,
  totalPrice: 0,
  cartProducts: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addItemToCart(state, action) {
      const newProduct = action.payload;
      const existingProduct = state.cartProducts.find(
        (item) => item.id === newProduct.id
      );
      state.totalPrice=state.totalPrice+newProduct.price;
      state.totalProducts++;
      if(!existingProduct){
          state.cartProducts.push({
            id: newProduct.id,
            name: newProduct.name,
            image: newProduct.image,
            quantity: 1,
            price: newProduct.price,
          })
      }
    },
    removeItemFromCart(state, action) {
      let removeProduct = action.payload;
      state.totalProducts--;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
