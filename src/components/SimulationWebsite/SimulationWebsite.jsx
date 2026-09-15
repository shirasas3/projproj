import React, { useState } from 'react';
import BlogPost from '../BlogPost/BlogPost'
import WritePost from '../WritePost/WritePost';
import searchIcon from "../../assets/search.png"
import starIcon from "../../assets/star.png"
import writeIcon from "../../assets/write.png"
import './SimulationWebsite.css';
import ClosePage from '../ClosePage/ClosePage';

const SimulationWebsite = ({setOpeningOrClosingPage,setPageNum, setSubjectNum ,setStartest, setExplanations}) => {
    const [isWriting, setIsWriting] = useState(false);
    const [blogPosts , setBlogPosts ] = useState([{ 
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam cursus velit sit amet ex ornare fermentum...", 
        date: "6/7/2020", 
        likes: 34, 
        id: 2 
      }]
    );

    const correctAnswer = () => {
        alert("יפה מאוד, הקפצת את המספר 1." );
        setOpeningOrClosingPage("closing");
    };
    
    const writeBlog = () => {
        setIsWriting(true);
    };

    const postBlog = (newPost) => {
      setBlogPosts(prev => [...prev, newPost]);
    };
  
    const stopWriting = () => {
      setIsWriting(false);
    };
  
    return (
      <div id="app">
        <div className='url'>
            <input className='url-input' placeholder='https...' />
            <img className='star-icon' src={starIcon} />
        </div>
        <div className='search-bar'>
            <img className='search-icon' src={searchIcon} />
            <input className='search-input' placeholder='Search...' />
        </div>
        <div className='blog-area'>
            {isWriting && <WritePost stopWriting={stopWriting} postBlog={postBlog} correctAnswer={correctAnswer} blogPostsArr={blogPosts}/>}
                {
                blogPosts.map(post => (
                    <BlogPost
                    key={post.id}
                    text={post.text}
                    date={post.date}
                    likes={post.likes}
                    id={post.id}
                    />
                ))
                }
                <img id="write-blog-btn" onClick={() => writeBlog()} src={writeIcon} />
        </div>
      </div>
        
    );
}

export default SimulationWebsite