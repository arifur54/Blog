import React from 'react'
import "./login.css"
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div className='login'>
      <span className="loginTitle">Login</span>
        <form className="loginForm">
            <label htmlFor="">Email</label>
            <input type="text" className='loginInput' placeholder='Enter Your email...' />
            <label htmlFor="">Password</label>
            <input type="text" className='loginInput' placeholder='Enter Your Password...'/>
            <button className="loginButton">Login</button>
        </form>
        <button className="loginRegisterButton">
          <Link  className='link'  to="/register">Register </Link></button>
    </div>
  )
}
