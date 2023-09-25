// import { useState } from 'react'
// import Dashboard from './pages/Index'

// function App() {
//   return (
//     <>
//     <Dashboard />
//     </>
//   )
// }

// export default App

import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useParams,
} from "react-router-dom";

// import Contact from "./component/Main/Contact";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
// import About from "./component/Main/About";
import Navbar from "./component/Navbar/Navbar";
import Dashboard from "./Pages/Dashboard";

console.log(window.location.pathname);

function App() {
  // const [url, setUrl] = useState("");

  // useEffect(() => {
  //   let getUrl = window.location.pathname;
  //   console.log(getUrl);
  //   setUrl(getUrl);
  // }, []);

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" Component={Dashboard} />
          {/* <Route path="/tentang" Component={About} />
          <Route path="/kontak" Component={Contact} /> */}
          <Route path="/login" Component={Login} />
          <Route path="/register" Component={Register} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
