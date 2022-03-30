import React, { useContext, useEffect, useState } from 'react'
import "./settings.css"
import Sidebar from "../../components/sidebar/Sidebar"
import { Context } from '../../context/Context';
import axios from 'axios';


export default function Settings() {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState(null);
  const [success, setSuccess] = useState(false);
  const {user, dispatch} = useContext(Context);
  const PF = "http://localhost:5000/images/";


  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({type: "UPDATE_START"})
    const updateUser = {
      userId: user._id,
      username,
      email,
      password,
    };
    if(file){
        const data = new FormData();
        const filename = Date.now() + file.name;
        data.append("name", filename);
        data.append("file", file)
        updateUser.profilePic = filename;
        try{
            await axios.post("/upload", data)
        }catch(err){
          console.log(err)
        }
    }

    try{
        const res = await axios.put("/users/"+ user._id, updateUser)
        setSuccess(true)
        dispatch({type: "UPDATE_SUCCESS", payload: res.data })
    }catch(err){
      dispatch({type: "UPDATE_FAILURE"})
    }
    
}

  return (
    <div className='settings'>
      <div className='settingsWrapper'>
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update your Account</span>
          <span className="settingsDeleteTitle">Delete Account</span>
        </div>
        <form className='settingsForm' onSubmit={handleSubmit}>
          <span>Profile Picture</span>
          <div className="settingsPP">
            <img 
            src={file ? URL.createObjectURL(file) : PF + user.profilePic} 
            alt=""
            />
            <label htmlFor='fileInput'>
              <i className="settingsPPIcon fa-solid fa-circle-user"></i>
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} onChange={(e) => setFile(e.target.files[0])} ></input>
          </div>
          <span>Username</span>
          <input type="text" placeholder={user.username} onChange={(e) => setUsername(e.target.value)} />
          <span>email</span>
          <input type="text" placeholder={user.email} onChange={(e) => setEmail(e.target.value)} />
          <span>password</span>
          <input type="password" onChange={(e) => setPassword(e.target.value)}/>
          <button className="settingsBtn" type='submit'>Update</button>
          {success && <span style={{color:"green"}}>Profile has been updated... </span>}
        </form>
      </div>
      <Sidebar />
    </div>
  )
}
