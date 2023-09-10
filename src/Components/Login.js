import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import { users } from './Data';

function Login({ setUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = users.find((user) => user.email === email && user.password === password);
    if (user) {
      console.log('Login successful');
      setUser(user);
      navigate('/profile');
    } else {
      console.log('Invalid credentials');
    }
  };

  return (
    <div className="parent">
      <div className="parent-back"></div>
      <div className="parent-log">
        <h2>Welcome Back!</h2>
        <div className="login">
          <form onSubmit={handleSubmit}>
            <label>
              Email<br />
              <input
                type="email"
                placeholder="example@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label>
              Password<br />
              <input
                type="password"
                placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <br />
              {/* Add validation error message here */}
              <p>
                <Link to="/">Forgot password?</Link>
              </p>
            </label>
            <button type="submit">Login</button>
          </form>
        </div>
        <div className="login">
          <p>
            Don't have an account? <Link to="/signup">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
    )};
    export default Login;