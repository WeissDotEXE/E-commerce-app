import {createSlice} from '@reduxjs/toolkit';

const initialCartState={
    totalProducts:0,
    showNotification:false,
}

const cartSlice=createSlice({
    name:'cart',
    initialState:initialCartState,
    reducers:{
        addOneProduct(state,action){
            state.totalProducts++;
            state.showNotification=true;
            // state.products=state.products.unshift(action.payload);
        },
        showNotification(state){
            state.showNotification=true
        },
        hideNotification(state){
            state.showNotification=false
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