import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Dashboard from "./Pages/Dashboard";
import { UserDashboard } from "./Pages/User/UserDashboard";
import { UserProfile } from "./Pages/User/UserProfile";
import { AdminDashboard } from "./Pages/Admin/AdminDashboard";
import { AdminProfile } from "./Pages/Admin/AdminProfile";
import { DaftarUser } from "./Pages/Admin/DaftarUser";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { DaftarDevice } from "./Pages/Admin/Device/DaftarDevice";
import TambahDevice from "./Pages/Admin/Device/TambahDevice";
import { EditDevice } from "./Pages/Admin/Device/EditDevice";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/user_dashboard" element={<UserDashboard />} />
          <Route path="/user_profile" element={<UserProfile />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/profile" element={<AdminProfile />} />
          <Route path="/admin/daftar-device" element={<DaftarDevice />} />
          <Route path="/admin/tambah-device" element={<TambahDevice />} />
          <Route path="/admin/edit-device/:id" element={<EditDevice />} />
          <Route path="/admin/daftar-user" element={<DaftarUser />} />
        </Routes>
        <ToastContainer />
      </Router>
    </>
  );
}

export default App;

// import React, { useState } from "react";
// import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

// import Login from "./Pages/Login";
// import Register from "./Pages/Register";
// import Dashboard from "./Pages/Dashboard";
// import { UserDashboard } from "./Pages/User/UserDashboard";
// import { UserProfile } from "./Pages/User/UserProfile";
// import { AdminDashboard } from "./Pages/Admin/AdminDashboard";
// import { AdminProfile } from "./Pages/Admin/AdminProfile";
// import { DaftarUser } from "./Pages/Admin/DaftarUser";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { DaftarDevice } from "./Pages/Admin/Device/DaftarDevice";
// import TambahDevice from "./Pages/Admin/Device/TambahDevice";
// import { EditDevice } from "./Pages/Admin/Device/EditDevice";

// // Assume you have a function to check if the user is authenticated
// const isAuthenticated = () => {
//   // Replace the following line with your actual authentication logic
//   // For example, you might check if there's a token in localStorage or a cookie.
//   return Cookies.get("token") !== undefined;
// };

// const PrivateRoute = ({ element, path }) => {
//   return isAuthenticated() ? (
//     element
//   ) : (
//     <Navigate to="/login" state={{ from: path }} />
//   );
// };

// function App() {
//   return (
//     <>
//       <Router>
//         <Routes>
//           <Route exact path="/" element={<Dashboard />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />
//           <Route
//             path="/user_dashboard"
//             element={<PrivateRoute element={<UserDashboard />} path="/user_dashboard" />}
//           />
//           <Route
//             path="/user_profile"
//             element={<PrivateRoute element={<UserProfile />} path="/user_profile" />}
//           />
//           <Route
//             path="/admin/dashboard"
//             element={<PrivateRoute element={<AdminDashboard />} path="/admin/dashboard" />}
//           />
//           <Route
//             path="/admin/profile"
//             element={<PrivateRoute element={<AdminProfile />} path="/admin/profile" />}
//           />
//           <Route
//             path="/admin/daftar-device"
//             element={<PrivateRoute element={<DaftarDevice />} path="/admin/daftar-device" />}
//           />
//           <Route
//             path="/admin/tambah-device"
//             element={<PrivateRoute element={<TambahDevice />} path="/admin/tambah-device" />}
//           />
//           <Route
//             path="/admin/edit-device/:id"
//             element={<PrivateRoute element={<EditDevice />} path="/admin/edit-device/:id" />}
//           />
//           <Route
//             path="/admin/daftar-user"
//             element={<PrivateRoute element={<DaftarUser />} path="/admin/daftar-user" />}
//           />
//         </Routes>
//         <ToastContainer />
//       </Router>
//     </>
//   );
// }

// export default App;
