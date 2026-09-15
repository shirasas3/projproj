import React, { useRef, useEffect, useState} from 'react';
import './WritePost.css';
import User from '../User/User';
// import closeIcon from '../../assets/close.png';

const WritePost = ({ stopWriting, postBlog , blogPostsArr, correctAnswer}) => {

  const [currentText, setCurrentText] = useState("");
  const textAreaRef = useRef(null);

  const dateObj = new Date();
  const date = `${dateObj.getDate()}/${dateObj.getMonth() + 1}/${dateObj.getFullYear()}`;

  const createPost = () => {
    const newPost = { 
        text: currentText, 
        date: date, 
        likes: 0, 
        id: blogPostsArr.length + 1 
    }

    postBlog(newPost)
    stopWriting();
    if (currentText === "<script>alert(1)</script>") {
      correctAnswer();
    }
  };

  useEffect(() => {
    textAreaRef.current.focus();
  });

  return ( 
    <div>
      <div className='dark-background'></div>
        <div id="write-post" className='post'>
          <User date={date}/>
          <textarea
          ref={textAreaRef}
          id='text-area'
          placeholder="כתוב את בלוג חלומותיך..."
          value={currentText}
          onChange={(e) => setCurrentText(e.target.value)}
          />
          <button onClick={createPost} id='post-btn' className='blog-button' aria-label="העלה לבלוג!" data-balloon-pos="up">Lorem</button>
          {/* <img src={closeIcon} onClick={stopWriting} className='close-button blog-button icon' alt='close' /> */}
        </div>
    </div>
    
  );
};

export default WritePost;
