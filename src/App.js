import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { withAuthenticator } from '@aws-amplify/ui-react';
import './App.css';

// Lazy load components
const Home = lazy(() => import('./components/Home'));
const Login = lazy(() => import('./components/Login'));
const SignUp = lazy(() => import('./components/SignUp'));
const Dashboard = lazy(() => import('./components/Dashboard'));
const Logout = lazy(() => import('./components/Logout'));
const NotFound = lazy(() => import('./components/NotFound')); // Assuming you have a NotFound component

function App() {
  return (
    <Router>
      <div className="App">
        <Suspense fallback={<div>Loading...</div>}> {/* Display a loading message or spinner while components are being loaded */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="*" element={<NotFound />} /> {/* Handle unmatched routes */}
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default withAuthenticator(App);
