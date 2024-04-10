import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>404</h1>
      <p>Page not found</p>
      <p>The page you are looking for doesn't exist or has been moved.</p>
      <Link to="/">Return Home</Link>
    </div>
  );
}

export default NotFound;
