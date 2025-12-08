import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"user",
    initialState: null,
    reducers:{
        addUser : (state, action) => {
            return action.payload;
        },
        editUser : (state, action) => {
            console.log("EDITUSER",action.payload);
            
            return action.payload;
        },
        removeUser: () => {
            console.log(":yaha tak to aagaye");
            return null;
        }
    }
})

export const {addUser, removeUser,editUser} = userSlice.actions;
export default userSlice.reducer;
