import {configureStore} from "@reduxjs/toolkit"
import userReducer from "../features/userSlice"
import feedReducer from "../features/feedSlice"
import connectionReducer from "../features/connectionSlice"
import requestReducer from "../features/requestSlice"
export const store = configureStore({
    reducer : {
        user : userReducer,
        feed : feedReducer,
        connections : connectionReducer,
        requests : requestReducer
    }
})