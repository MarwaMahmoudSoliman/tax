import { configureStore } from "@reduxjs/toolkit"
import userSlice from "./slice/userSlice";
import papersSlice from "./slice/papersSlice";

const store = configureStore({
    reducer:{
        user: userSlice,
     papers:papersSlice
    }
})
export default store;