import React from 'react'
import './post.css'

export default function Post() {
  return (
    <div className='post'>
        <img
        className='postImg'
        src='https://i.cbc.ca/1.5256404.1566499707!/fileImage/httpImage/cat-behaviour.jpg' 
        alt='' 
        />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Music</span>
                <span className="postCat">Life</span>
            </div>
            <span className="postTitle">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            </span>
            <hr/>
            <span className="postDate">1 hour ago</span>
            <p className='postDesc'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Molestias tempora reiciendis obcaecati officia, fugit odio voluptas minus
                  commodi rerum deleniti cum nihil maxime itaque? Consequatur quisquam 
                  maxime est sunt id.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Molestias tempora reiciendis obcaecati officia, fugit odio voluptas minus
                  commodi rerum deleniti cum nihil maxime itaque? Consequatur quisquam 
                  maxime est sunt id.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Molestias tempora reiciendis obcaecati officia, fugit odio voluptas minus
                  commodi rerum deleniti cum nihil maxime itaque? Consequatur quisquam 
                  maxime est sunt id.
            </p>
        </div>
    </div>
  )
}
