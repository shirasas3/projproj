import React from 'react';
import './User.css';
import userIcon from '../../assets/user.png';

const User = (props) => {

  return (
    <div id="user">
      <img src={userIcon} className="user-pic icon" alt="user" />
      <div> Lorem Ipsum</div>
      <div className="date">{props.date}</div>
    </div>
  );
};

export default User;
