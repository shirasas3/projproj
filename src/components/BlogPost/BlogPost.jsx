import React, { useState } from 'react';
import './BlogPost.css';
import User from '../User/User';
import likeIcon from '../../assets/like.png';
import likedIcon from '../../assets/liked.png';
import commentIcon from '../../assets/comment.png';
import shareIcon from '../../assets/share.png';

const BlogPost = (props) => {
  const [isLiked, setIsLiked] = useState(false);

  const like = () => {
      setIsLiked(prev => !prev);
  };

  const currLikes = isLiked ? props.likes + 1 : props.likes;

  return (
    <div className="post">
      <User date={props.date}/>
      <div className='post-blog'>
        <p>{props.text}</p>
        <div className='icons'>
          <div className='likes' aria-label="Like" data-balloon-pos="up">
            <img onClick={like} className='icon' src={isLiked ? likedIcon : likeIcon} alt='like icon'/>
            <span className='likeCount'>{currLikes}</span>
          </div>
          <img src={commentIcon} className='blog-button icon' alt='comment icon'/>
          <img src={shareIcon} className='blog-button icon' alt='share icon'/>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
