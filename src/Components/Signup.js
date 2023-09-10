import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Signup.css';
import { users } from './Data';

function Signup({ setUser }) {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if the email is already registered
    const existingUser = users.find((user) => user.email === email);
    if (existingUser) {
      console.log('Email already registered');
      return;
    }

    // Perform signup logic here (e.g., create a new user)
    const newUser = {
      email: email,
      username: username,
      password: password,
    };

    // Add the new user to the users array (or store it in a database)
    users.push(newUser);

    // Set the user state
    setUser(newUser);

    // Redirect to Profile Page upon successful signup
    navigate('/profile');
  };

  return (
    <div className='signup'>
      <h1>Sign Up</h1>
      <div className='form'>
        <form onSubmit={handleSubmit}>
          <input type='email' name='Email' placeholder='example@gmail.com' value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input type="text" name="username" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
          <input type="password" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <Link to='/profile'>
            <button type="submit" className='btn'>Sign Up</button>
          </Link>
        </form>
      </div>
      <div className='login'>
        <p>Already have an account? <Link to='/login'>Login</Link></p>
      </div>
    </div>
  );
}

export default Signup;
