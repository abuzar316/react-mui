import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import userReducer from './slice/UserSlice';

const rootReducer = combineReducers({
    userReducer
});

const store = configureStore({
    reducer: rootReducer
});


export default store;