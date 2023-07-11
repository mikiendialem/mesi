import React, { useState} from 'react'
import './Login.css'
import { Link } from 'react-router-dom'


function Login() {
    const[toggle,setToggle]=useState(false);
    const togglePasswordVisibility = () => {
        setToggle(!toggle);
      };
      const [role, setRole] = useState("");

      const handleRoleChange = (event) => {
        setRole(event.target.value);
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        if (role === "student") {
          console.log("Student login");
        } else if (role === "admin") {
          console.log("Admin login");
        } else {
          console.log("Please select a role");
        }
      };
  return (
    <div className='parent'>
      <div className='parent-back'>
      </div>
      <div className='parent-log'>
        <div className='def' onSubmit={handleSubmit}>
            <div className='def1'> 
                <label>
                    Student
                    <br />
                    <input type="radio" value="student"checked={role === "student"}
                    onChange={handleRoleChange}
                    />
                </label>
            </div>
            <div className='def2'>
                <label>
                    Admin
                    <br />
                    <input type="radio" value="admin" checked={role === "admin"} onChange={handleRoleChange}
                    />
                </label>
            </div>
        </div>
        <h2>Welcome Back!</h2>
            <div className='login'>
                <form>
                    <label>
                        Email<br/>
                        <input type="email" placeholder="example@gmail.com" />
                    </label>
                    <label>
                        Password<br/>
                        <input type={toggle ? "text" : "password"} placeholder='********'/>
                        <i class={toggle? "far fa-eye-slash" : "far fa-eye"} onClick={togglePasswordVisibility}></i><br/>
                        <span ></span>
                        {/* <small style={{color:"red"}}>*This field is required.</small><br/> */}
                        <p><Link to="/">Forgot password?</Link></p>
                    </label>
                    <Link to="/dis"><button type="submit">Login</button></Link>
                </form>
            </div>
        <div className='next'>
            <p>Not a member?<Link to="/signup">Sign up now</Link></p>
        </div>
        </div>
      </div>
  )
}

export default Login

