import React, { useState } from 'react';
import {
    Grid,
    Box,
    Typography,
    TextField,
    Button,
    CircularProgress,
} from '@mui/material';
import validation from '../utils/Validation';
import useAxios from '../customhooks/useAxios';
import { ToastContainer, toast } from 'react-toastify';

const initialValue = { name: '', email: '', password: '', username: '' }


const Signup = () => {
    const [value, setValue] = useState(initialValue);
    const [errors, setErrors] = useState({});


    const { loading, error, response, fetchData } = useAxios();

    const notify = (message) => toast(message);

    const handleSubmit = async (e) => {
        e.preventDefault()
        const err = validation(value);
        setErrors(err)
        if (err.name || err.email || err.username || err.password) {
            return false;
        }

        await fetchData({
            method: 'post',
            url: 'register',
            body: value
        });

        setValue(initialValue);

        if (response) {
            console.log("first")
            console.log("first")
            console.log("first")
            return notify(response?.message)
        }

        if (error) {
            return notify(error?.response?.data?.message)
        }

        // console.log("response", response)
        // console.log("error", error)
        // console.log("loading", loading)

    }

    const handleChange = (e) => {
        setValue({ ...value, [e.target.name]: e.target.value });
    }

    console.log("response", response)
    console.log("error", error)
    console.log("loading", loading)

    return (
        <>
            <Grid
                container
                sx={{
                    height: '100vh',
                    background: 'linear-gradient(45deg, rgb(106, 120, 209), rgb(0, 164, 189))'
                }}
            >
                {loading ?
                    <Box sx={{
                        position: 'absolute',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '100%',
                        height: '100vh',
                        background: '#00000040'
                    }}>
                        <CircularProgress />
                    </Box>
                    : ''}
                <ToastContainer />
                <Grid item md={4} sx={{ margin: 'auto' }}>
                    <Box sx={{
                        border: '1px solid #ddd',
                        borderRadius: '8px',
                        padding: 2,
                        background: '#fff'
                    }}>
                        <Box
                            component="form"
                            onSubmit={(e) => handleSubmit(e)}
                            sx={{
                                '& .MuiFormControl-root': {
                                    margin: '8px 0'
                                },
                                '& .MuiButton-root': {
                                    margin: '8px 0'
                                }

                            }}
                        >
                            <Typography variant='h4' align='center'>
                                Sign Up
                            </Typography>
                            <TextField
                                label="Email"
                                name='email'
                                id="outlined-required"
                                value={value.email}
                                onChange={handleChange}
                                error={errors.email ? (value.email ? false : true) : false}
                            />
                            <TextField
                                label="Name"
                                name='name'
                                onChange={handleChange}
                                value={value.name}
                                error={errors.name ? (value.name ? false : true) : false}
                            />
                            <TextField
                                id="outlined-password-input"
                                label="Password"
                                type="password"
                                name='password'
                                autoComplete="current-password"
                                value={value.password}
                                onChange={handleChange}
                                error={errors.password ? (value.password ? false : true) : false}
                            />

                            <TextField
                                label="username"
                                type="username"
                                name='username'
                                value={value.username}
                                onChange={handleChange}
                                error={errors.username ? (value.username ? false : true) : false}
                            />

                            <Button
                                variant='contained'
                                fullWidth
                                type='submit'
                            >
                                Submit
                            </Button>
                        </Box>
                    </Box>
                </Grid>
            </Grid >
        </>

    )
}

export default Signup