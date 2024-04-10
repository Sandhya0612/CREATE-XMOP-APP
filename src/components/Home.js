import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Welcome to XMop Accelerate</h1>
      <p>This is the home page of the XMop Accelerate website. Start by exploring our features.</p>
      <div>
        <Link to="/login">Login</Link> | <Link to="/signup">Sign Up</Link>
      </div>
    </div>
  );
}

export default Home;

