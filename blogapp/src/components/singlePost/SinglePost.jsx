import React from 'react'
import './singlepost.css'


export default function SinglePost() {
  return (
    <div className='singlepost'>
        <div className="singlePostWrapper">
            <img 
                src="https://images.immediate.co.uk/production/volatile/sites/4/2018/08/iStock_13967830_XLARGE-90f249d.jpg?quality=90&resize=960%2C408"
                alt=""
                className='singlePostImg'
            />
            <h1 className='singlePostTitle'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                <div className="singlePostEdit">
                    <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
                    <i className="singlePostIcon fa-solid fa-trash-can"></i>
                </div>
            </h1>
            <div className="singlePostInfo">
                <span className='singlePostAuthor'>Author: <b>Arifur</b></span>
                <span className='singlePostDate'>1 hour ago </span>
            </div>
            <p className='singlePostDesc'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis,
                 soluta non. Maxime quibusdam error beatae dolores omnis
                  voluptates optio quo sed dolor, aperiam similique eum 
                  quidem quod impedit eveniet incidunt!
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis,
                 soluta non. Maxime quibusdam error beatae dolores omnis
                  voluptates optio quo sed dolor, aperiam similique eum 
                  quidem quod impedit eveniet incidunt!
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis,
                 soluta non. Maxime quibusdam error beatae dolores omnis
                  voluptates optio quo sed dolor, aperiam similique eum 
                  quidem quod impedit eveniet incidunt!
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis,
                 soluta non. Maxime quibusdam error beatae dolores omnis
                  voluptates optio quo sed dolor, aperiam similique eum 
                  quidem quod impedit eveniet incidunt!
            </p>
        </div>
    </div>
  )
}
