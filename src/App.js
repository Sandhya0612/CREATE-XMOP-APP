import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp'; // Make sure this matches the filename exactly
import Dashboard from './components/Dashboard';
import Logout from './components/Logout';
import { withAuthenticator } from '@aws-amplify/ui-react'; // Import withAuthenticator
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </div>
    </Router>
  );
}

// Wrap your App component with withAuthenticator
export default withAuthenticator(App);
