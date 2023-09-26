
// import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Navbar from "./component/Navbar/Navbar";
import Dashboard from "./Pages/Dashboard";


function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" Component={Dashboard} />
          <Route path="/login" Component={Login} />
          <Route path="/register" Component={Register} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
