import { createSlice } from "@reduxjs/toolkit";

const connectionSlice = createSlice({
    name:"connections",
    initialState: null,
    reducers:{
        addConnections : (state, action) => {
            return action.payload;
        },
        // removeFromFeed: (state,action) => {
        //     console.log(action.payload);
            
        //    return state = state.filter((user) => action.payload != user._id)
        // }
    }
})

export const {addConnections} = connectionSlice.actions;
export default connectionSlice.reducer;
