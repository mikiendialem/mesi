import React from 'react'
import {Link} from 'react-router-dom'
import './Signup.css'

function Signup() {
  return (
    <div className='signup'>
      <h1>Sign Up</h1>
      <div className='form'>
        <form action="/signup" method="post">
            <input type='email' name='Email' placeholder='example@gmail.com'/>
            <input type="text" name="username" placeholder="Username"/>
            <input type="password" name="password" placeholder="Password"/>
            <Link to="/dis"><input type="submit" value="Sign Up" className='btn'/></Link>
        </form>
      </div>
    </div>
  );
}

export default Signup
