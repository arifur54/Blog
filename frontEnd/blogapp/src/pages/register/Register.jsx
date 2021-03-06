import React, { useState } from 'react'
import "./register.css"
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Register() {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState(false)


  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false)
    try{
      const res = await axios.post("/auth/register", 
      {
        username,
        email,
        password
      });

      // res.data && window.location.replace("/login")
      if(res.data){
        window.location.replace("/login")
      }
    } catch(err){
      setError(true)
    }
  };

  return (
    <div>
          <div className='register'>
              <span className="registerTitle">Register</span>
              <form className="registerForm" onSubmit={handleSubmit}>
                  <label htmlFor="">Username</label>
                  <input 
                    type="text" 
                    className='registerInput' 
                    placeholder='Enter Your username...'
                    onChange={e => setUsername(e.target.value)}
                   />
                  <label htmlFor="">Email</label>
                  <input 
                    type="text" 
                    className='registerInput' 
                    placeholder='Enter Your email...' 
                    onChange={e => setEmail(e.target.value)}
                  />
                  <label htmlFor="">Password</label>
                  <input 
                    type="password" 
                    className='registerInput' 
                    placeholder='Enter Your password...'
                    onChange={e => setPassword(e.target.value)}
                  />
                  <button className="registerButton" type="submit">Register</button>
                  {error && <span style={{color:"red"}}>Something went wrong</span>}
    
              </form>
              <button className="registerLoginButton">
                <Link className='link' to="/login">Login</Link>
              </button>
          </div>
    </div>
  )
}
