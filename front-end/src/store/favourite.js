import { createSlice } from "@reduxjs/toolkit";

const initialFavState={
    totalFav:0,
    isFavourite:false
}

const favouriteSlice=createSlice({
    name:'favourite',
    initialState:initialFavState,
    reducers:{
        addProduct(state){
            state.totalFav++;
            state.isFavourite=true
        },
        removeProduct(state){
            state.totalFav--;
            state.isFavourite=false
        }
    }
})

export const favActions=favouriteSlice.actions;

export default favouriteSlice.reducer;