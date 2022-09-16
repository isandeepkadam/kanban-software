import { createSlice } from "@reduxjs/toolkit"

export const counterSlice = createSlice({
    name: "counter",
    initialState: {
        counter: 0,
    },
    reducers:{
        add:(state) => {state.counter += 1},
        sub:(state) => {state.counter -= 1},
    },    
})

export const {add, sub} = counterSlice.actions
export default counterSlice.reducer