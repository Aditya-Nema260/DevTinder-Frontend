import { createSlice } from "@reduxjs/toolkit";

const requestSlice = createSlice({
    name:"requests",
    initialState: null,
    reducers:{
        addRequests : (state, action) => {
            return action.payload;
        },
          removeFromRequest: (state,action) => {
            console.log(action.payload);
            
           return state = state.filter((user) => action.payload != user._id)
        }
    }
})

export const {addRequests,removeFromRequest} = requestSlice.actions;
export default requestSlice.reducer;
