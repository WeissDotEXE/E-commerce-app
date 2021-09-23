import { createSlice } from "@reduxjs/toolkit";

const initialCartState={
    totalProducts:0
}

const cartSlice = createSlice({
    name:'cart',
    initialState:initialCartState,
    reducers:{
        addItemToCart(state){
            state.totalProducts++;
        },
        removeItemFromCart(state){
            state.totalProducts--;
        }
    }
})

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;