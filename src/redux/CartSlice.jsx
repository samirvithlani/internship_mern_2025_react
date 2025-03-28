import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        cart:[]
    },
    reducers:{
        //state --> initialState
        //action --> type -> "cart/addToCart"
        //switch(type):
        //payload -->
        addToCart:(state,action)=>{
            //state.cart.push(action.payload)
            // console.log("state,,,,",state)
            // console.log("action",action)
            state.cart.push(action.payload)
        }
    }
        
})

export const {addToCart} =cartSlice.actions
export default cartSlice.reducer
