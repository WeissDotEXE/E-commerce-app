import { createSlice } from "@reduxjs/toolkit";

const initialFavState={
    totalFav:0
}

const favouriteSlice=createSlice({
    name:'favourite',
    initialState:initialFavState,
    reducers:{
        addProduct(state){
            state.totalFav++
        },
        removeProduct(state){
            state.totalFav--
        }
    }
})

export const favActions=favouriteSlice.actions;

export default favouriteSlice.reducer;