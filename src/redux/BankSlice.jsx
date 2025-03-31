import { createSlice } from "@reduxjs/toolkit";

const bankSlice = createSlice({
    name:"bank",
    initialState:{
        balance:0
    },
    reducers:{
        //actions
        depositAction:(state,action)=>{
            state.balance+=action.payload //1000 - > 0 + 1000
        },
        withdrawAction:(state,action)=>{
            state.balance-=action.payload
        }
    }
})
//reducer
export const {depositAction,withdrawAction} = bankSlice.actions
export default bankSlice.reducer
//actions