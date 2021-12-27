import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes
  } from 'react-router-dom';
import Home from './home/Home';
import Admin from './admin/Admin';

export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path="/admin" element={<Admin />} />
        </Routes>
      </div>
    </Router>
  )
};
