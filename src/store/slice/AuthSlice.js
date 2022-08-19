import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from 'axios';

const POSTS_URL = `http://localhost:8000/api/v0/login`;


const initialState = {
    user: {},
    token: null,
    apiStatus: null,
    message: null,
    status: 'idle',
    error: null
}


export const loginUser = createAsyncThunk('auth/fetchauth', async (data) => {
    try {
        // console.log("first", data)
        const response = await axios.post(POSTS_URL, data, {
            withCredentials: true
        });
        // console.log(response)
        return response.data;
    } catch (error) {
        // console.log(error)
        return error.message;
    }
})

export const refrashAuth = createAsyncThunk('refrashauth/fetchrefrashauth', async (data) => {
    try {
        // console.log("first", data)
        const response = await axios.post(`http://localhost:8000/api/v0/refrashtoken`, data, {
            withCredentials: true
        });
        // console.log("response")
        return response.data;
    } catch (error) {
        // console.log(error)
        return error.message;
    }
});

export const logout = createAsyncThunk('logout/fetchlogout', async (data) => {
    try {
        // console.log("first", data)
        const response = await axios.post(`http://localhost:8000/api/v0/logout`, null, {
            withCredentials: true
        });
        console.log("response", response)
        return response.data;
    } catch (error) {
        // console.log(error)
        return error.message;
    }
})


export const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        [loginUser.pending]: (state, action) => {
            state.status = 'loading'
        },
        [loginUser.fulfilled]: (state, action) => {
            state.message = action.payload.message;
            state.apiStatus = action.payload.status;
            state.user = action.payload.user;
            state.token = action.payload.user.accessToken;
            state.status = 'success'
        },
        [loginUser.rejected]: (state, action) => {
            state.status = 'failed'
        },
        [refrashAuth.pending]: (state, action) => {
            state.status = 'loading'
        },
        [refrashAuth.fulfilled]: (state, action) => {
            state.message = action.payload.message;
            state.apiStatus = action.payload.status;
            state.user = action.payload.user;
            state.token = action.payload.user.accessToken;
            state.status = 'success'
        },
        [refrashAuth.rejected]: (state, action) => {
            state.status = 'failed';
            state.error = action.payload.error
        },
        [logout.pending]: (state, action) => {
            state.status = 'loading'
        },
        [logout.fulfilled]: (state, action) => {
            state.message = action.payload.message;
            state.apiStatus = action.payload.status;
            state.user = null;
            state.token = null;
            state.status = 'success'
        },
        [logout.rejected]: (state, action) => {
            state.status = 'failed';
            state.error = action.payload.error
        }
    }
});



export default authSlice.reducer;
