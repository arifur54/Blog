import React from 'react'
import "./write.css";

export default function Write() {
  return (
    <div className='write'>
        <img
            className='writeImg'
            src='https://www.pumpkin.care/blog/wp-content/uploads/2020/08/Cat-Age-Chart-Hero-Opt1.jpg' 
            alt='cat 2' 
        />
        <form className='writeFrom'>
            <div className="writeFormGroup">
                <label htmlFor='fileInput'>
                    <i className="writeIcon fa-solid fa-plus"></i>
                </label>
                <input type='file' id="fileInput" style={{display: "none"}} />
                <input type='text' placeholder='title' className='writeInput' autoFocus={true}/>
            </div>
            <div className="writeFormGroup">
                <textarea 
                    placeholder='tell your story.... ' 
                    type='text' 
                    className='writeInput'>
                </textarea>
           
            <button className='writeSubmit'>Publish</button>
            </div>
        </form>
    </div>
  )
}
