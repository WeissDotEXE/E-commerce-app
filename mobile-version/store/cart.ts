import { createSlice } from "@reduxjs/toolkit";

const initialCartState={
    totalProducts:0,
    totalPrice:0,
    cartProducts:[]
}

const cartSlice = createSlice({
    name:'cart',
    initialState:initialCartState,
    reducers:{
        addItemToCart(state,action){
            let newProduct=action.payload;
            state.totalPrice+=newProduct.price;
            state.totalProducts++;
            state.cartProducts=state.cartProducts.push(newProduct);
        },
        removeItemFromCart(state,action){
            let removeProduct=action.payload
            state.totalProducts--;
        }
    }
})

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;