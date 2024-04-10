import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
    setError(''); // Reset error message on input change
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Basic validation
    if (!credentials.email || !credentials.password) {
      setError('Please fill in all fields');
      setLoading(false);
      return;
    }

    // Here, integrate with your authentication logic
    // For example, using AWS Amplify Auth.signIn()

    setLoading(false);
    // On successful login, navigate to the dashboard or another appropriate page
    navigate('/dashboard');
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      {error && <div className="form-error">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" name="email" value={credentials.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" name="password" value={credentials.password} onChange={handleChange} required />
        </div>
        <button type="submit" disabled={loading}>{loading ? 'Logging In...' : 'Login'}</button>
      </form>
      <p>
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </p>
    </div>
  );
}

export default Login;
