import React from 'react';
import { useNavigate } from 'react-router-dom';

function Logout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform logout operations...
    navigate('/');
  };

  return (
    <div className="container" style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>XMOP Accelerate - Logout</h1>
      <p>You have been logged out successfully.</p>
      <button onClick={handleLogout}>Return to Home</button>
    </div>
  );
}

export default Logout;

