import {createSlice} from '@reduxjs/toolkit';

const initialCartState={
    totalProducts:0,
    showNotification:false,
    products:[],
    totalPrice:0
}

const cartSlice=createSlice({
    name:'cart',
    initialState:initialCartState,
    reducers:{
        addOneProduct(state,action){
            state.totalProducts++;
            state.showNotification=true;
            state.products.unshift(action.payload);
            state.totalPrice=state.totalPrice+action.payload.price
        },
        removeOneProduct(state,action){
            state.totalProducts--;
            state.showNotification=true;
            state.totalPrice=state.totalPrice-action.payload.price
        },
        showNotification(state){
            state.showNotification=true
        },
        hideNotification(state){
            state.showNotification=false
        },
        addMultipleProducts(state,action){
            state.totalProducts=state.totalProducts+action.payload
        },
        removeSimilarItems(state,action){
            state.totalProducts=state.totalProducts-action.payload;
        },
        removeAllItems(state){
            state.totalProducts=0;
            state.products=[]
            state.totalProducts=0
        }
    }
})

export const cartActions=cartSlice.actions;

export default cartSlice.reducer;