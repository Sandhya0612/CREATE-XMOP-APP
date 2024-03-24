import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'; //  corresponding CSS file for styling
import { Amplify } from 'aws-amplify';


Amplify.configure({
  Auth: {
    region: 'us-east-1', 
    userPoolId: 'us-east-1_rd4iHnWiZ',
    userPoolWebClientId: '56p705ak7canqg2un9u18ba0ka',
    authenticationFlowType: 'USER_PASSWORD_AUTH'
  }
});
function Login() {
  return (
    <div className="login-container">
      <h2>Login</h2>
      <form>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" placeholder="Enter your email" />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" placeholder="Enter your password" />
        </div>
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </p>
    </div>
  );
}

export default Login;
