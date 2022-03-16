import React from 'react'
import "./settings.css"
import Sidebar from "../../components/sidebar/Sidebar"

export default function Settings() {
  return (
    <div className='settings'>
      <div className='settingsWrapper'>
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update your Account</span>
          <span className="settingsDeleteTitle">Delete Account</span>
        </div>
        <form className='settingsForm'>
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img 
            src="https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=49ed3252c0b2ffb49cf8b508892e452d" 
            alt="Cat 3"
            />
            <label htmlFor='fileInput'>
              <i className="settingsPPIcon fa-solid fa-circle-user"></i>
            </label>
            <input type="file" id="fileInput" style={{display: "none"}}/>
          </div>
          <lable>Username</lable>
          <input type="text" placeholder='user name' />
          <lable>email</lable>
          <input type="text" placeholder='email@email.com' />
          <lable>password</lable>
          <input type="password"/>
          <button className="settingsBtn">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  )
}
