import React from 'react';
import Navbar from '../Navbar';
import Box from "@mui/material/Box";
import Sidebar from '../Sidebar';
import { Outlet } from 'react-router';


const AuthLayout = () => {
    return (
        <>
            <Box sx={{ display: "flex" }}>
                <Navbar />

                <Sidebar />

                <Outlet />

            </Box>
        </>
    )
}

export default AuthLayout