import React, { useContext } from 'react'
import{
    Routes,
    Route,
} from "react-router-dom";
import { Context } from './context/Context';

import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Settings from './pages/settings/Settings';
import Single from './pages/single/Single';
import Write from './pages/write/Write';



export default function Routess() {
  const {user} = useContext(Context);
  

  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={user? <Home />: <Register />} />
        <Route path='/login' element={user ? <Home />:<Login />} />
        <Route path='/write' element={user ? <Write />: <Register />} />
        <Route path='/settings' element={user ? <Settings /> : <Register />} />
        <Route path='/post/:postId' element={<Single />} />
    </Routes>
  )
}
