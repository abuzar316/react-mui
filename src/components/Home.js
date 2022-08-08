import React from 'react';
import { useSelector } from 'react-redux';
import useAxios from '../customhooks/useAxios';


const Home = () => {
    const user = useSelector((state) => state.userReducer.user);

    const { response, error, loading } = useAxios({
        method: 'get',
        url: '/users',
    });

    console.log("response", response);
    console.log("error", error?.response?.status);
    console.log("loading", loading);

    return (
        <div className='d-flex vh-100'>
            <div className='col-6 m-auto'>
                <h1>Name : {user?.email} </h1>
                <h1>password : {user?.password} </h1>
            </div>
        </div>
    )
}

export default Home