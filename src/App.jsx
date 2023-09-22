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

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './pages/Index';
import Tentang from './component/Main/About';
import Kontak from './component/Main/Contact';
import Login from './Pages/Login';
import Register from './Pages/Register';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/tentang" component={Tentang} />
        <Route path="/kontak" component={Kontak} />
        <Route path="/loginr" component={Login} />
        <Route path="/register" component={Register} />
      </Switch>
    </Router>
  );
}

export default App;



