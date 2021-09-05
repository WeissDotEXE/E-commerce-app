import { createSlice } from "@reduxjs/toolkit";

const initialUpdateState={
    id:'',
    name:'',
    category:'',
    price:'',
    description:'',
    image:''
}

const updateSlice=createSlice({
    name:'update',
    initialState:initialUpdateState,
    reducers:{
        getId(state,action){
        state.id=action.payload;  
        },
        getName(state,action){
            state.name=action.payload
        },
        getCategory(state,action){
            state.category=action.payload
        },
        getPrice(state,action){
            state.price=action.payload
        },
        getDescription(state,action){
            state.description=action.payload
        },
        getImage(state,action){
            state.image=action.payload
        }
    }
})

export const updateActions=updateSlice.actions;
export default updateSlice.reducer;