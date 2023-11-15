import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import { UserDashboard } from "../Pages/User/UserDashboard";
import { UserProfile } from "../Pages/User/UserProfile";
import { AdminDashboard } from "../Pages/Admin/AdminDashboard";
import { AdminProfile } from "../Pages/Admin/AdminProfile";
import { TambahDevice } from "../Pages/Admin/TambahDevice";

export const Routers = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/user_dashboard" element={<UserDashboard />} />
          <Route path="/user_profile" element={<UserProfile />} />
          <Route path="/admin_dashboard" element={<AdminDashboard />} />
          <Route path="/admin_profile" element={<AdminProfile />} />
          <Route path="/tambah_device" element={<TambahDevice />} />
        </Routes>
      </Router>
    </>
  )
}
