import {createSlice} from '@reduxjs/toolkit';

const initialCartState={
    totalProducts:0,
    products:[]
}

const cartSlice=createSlice({
    name:'cart',
    initialState:initialCartState,
    reducers:{
        addOneProduct(state,action){
            state.totalProducts++;
            // state.products=state.products.unshift(action.payload);
        },
        removeOneProduct(state){
            state.totalProducts--;
        },
        addMultipleProducts(state,action){
            state.totalProducts=state.totalProducts+action.payload
        },
        removeSimilarItems(state,action){
            state.totalProducts=state.totalProducts-action.payload;
        },
        removeAllItems(state){
            state.totalProducts=0
        }
    }
})

export const cartActions=cartSlice.actions;

export default cartSlice.reducer;