import React, { useEffect, useState } from 'react'
import './sidebar.css'
import axios from 'axios';

export default function Sidebar() {
    const [cats, setCat] = useState([])

    useEffect(() => {
        const getCats = async () => {
            const res = await axios.get("/categories")
            setCat(res.data)
        }
        getCats()
    }, [])

  return (
    <div className='sidebar'>
        <div className="sidebarItem">
            <span className='sidebarTitle' > ABOUT ME</span>
            <img src='https://cdn.pixabay.com/photo/2020/11/02/20/36/cat-5707843_960_720.jpg' alt=""/>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Vero at accusamus odit cumque repellendus facilis!
                  Labore odio nemo magnam est tenetur reprehenderit aperiam qui
                  voluptatem, deserunt laudantium, blanditiis architecto distinctio.
              </p>
        </div>
        <div className='sidebarItem'>
            <span className='sidebarTitle'> CATAGORIES </span>
            <ul className="sidebarList">
                {cats.map((cat) => (
                    <li className="sidebarListItem" key={cat._id}>{cat.name}</li>
                ))}
            </ul>
        </div>
        <div className="sidebarItem">
            <span className='sidebarTitle'>FOLLOW US</span>
            <div className='sidebarSocial'>
                <i className="sidebarIcon fa-brands fa-facebook-square"></i>
                <i className="sidebarIcon fa-brands fa-twitter-square"></i>
                <i className="sidebarIcon fa-brands fa-instagram"></i>
            </div>
        </div>
    </div>
  )
}
