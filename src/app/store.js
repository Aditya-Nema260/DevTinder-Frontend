import {configureStore} from "@reduxjs/toolkit"
import userReducer from "../features/userSlice"
import feedReducer from "../features/feedSlice"
import connectionReducer from "../features/connectionSlice"
export const store = configureStore({
    reducer : {
        user : userReducer,
        feed : feedReducer,
        connections : connectionReducer,
    }
})