import { createSlice } from "@reduxjs/toolkit";
const counterSlice=createSlice({
    name:"counter",
    initialState:{
        count:0,
    },
    reducers:{
        // action
        increment:(state)=>{
            state.count=state.count+1;

        },
        decrement:(state)=>{
            state.count=state.count-1
        },
        incrementByValue:(state,action)=>{      //here incrementByValue is action
            state.count=state.count+action.payload
        }

    }
});

export const {increment,decrement,incrementByValue}=counterSlice.actions
export default counterSlice.reducer