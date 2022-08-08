import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Login from '../components/Login';
import Home from '../components/Home';
import SignUp from '../components/Signup';
import Dashboard from '../pages/Dashboard';
import HomePage from '../pages/HomePage';


import AuthLayout from '../components/layout/AuthLayout';
import DashboardHome from '../components/DashboardHome';


const MainRoute = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route exact path="/home" element={<Home />} />
      <Route exact path="/signup" element={<SignUp />} />
      <Route exact path="/dashboard" element={<Dashboard />} />
      <Route exact path="/admin" element={<HomePage />} />

      <Route exact path='/' element={<AuthLayout />} >
        <Route exact path='/admin/dashboard' element={<h1>Hello Admin</h1>} />
        <Route exact path='/admin/home' element={<DashboardHome />} />
      </Route>

      <Route exact path="*" element={<h1>Page Not Found</h1>} />
    </Routes>
  )
}

export default MainRoute;