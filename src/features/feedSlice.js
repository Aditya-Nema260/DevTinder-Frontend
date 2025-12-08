import { createSlice } from "@reduxjs/toolkit";

const feedSlice = createSlice({
  name: "feed",
  initialState: null,
  reducers: {
    addFeed: (state, action) => {
      return action.payload;
    },
    removeFromFeed: (state, action) => {
      console.log(action.payload);

      return (state = state.filter((user) => action.payload != user._id));
    },
    clearFeed: () => {
      return null;
    },
  },
});

export const { addFeed, removeFromFeed, clearFeed } = feedSlice.actions;
export default feedSlice.reducer;
