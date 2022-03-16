import React from 'react'
import "./register.css"
import { Link } from 'react-router-dom';

export default function Register() {
  return (
    <div>
          <div className='register'>
              <span className="registerTitle">Register</span>
              <form className="registerForm">
                  <label htmlFor="">Username</label>
                  <input type="text" className='registerInput' placeholder='Enter Your username...' />
                  <label htmlFor="">Email</label>
                  <input type="text" className='registerInput' placeholder='Enter Your email...' />
                  <label htmlFor="">Password</label>
                  <input type="text" className='registerInput' placeholder='Enter Your password...'/>
                  <button className="registerButton">Register</button>
              </form>
              <button className="registerLoginButton">
                <Link className='link' to="/login">Login</Link>
              </button>
          </div>
    </div>
  )
}
