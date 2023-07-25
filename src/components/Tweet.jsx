import React from 'react';
import ProfileImage from './ProfileImage';
import User from './User';
import Timestamp from './Timestamp';
import Message from './Message';
import Actions from './Actions';

function Tweet({ tweet }) {
  const { user, timestamp, message } = tweet


  return (
    <div className="tweet">
      <ProfileImage image={user.image} />
      {/* <img
        src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/ih_logo.jpeg"
        className="profile"
        alt="profile"
      /> */}

      <div className="body">
        <div className="top">
          <span className="user">
            {/* <span className="name">Ironhack</span>
            <span className="handle">@ironhack</span> */}
             <User name={user.name} handle={user.handle} />
          </span>

          <Timestamp time={timestamp} />
        </div>

        <Message message={message} />

        {/* <p className="message">
          On December 7th, we will be hosting a #webinar that will introduce you
          to #SQL! Are you ready? 🚀
        </p> */}
        <Actions />
        {/* <div className="actions">
         
          <i className="far fa-comment"></i>
          <i className="fas fa-retweet"></i>
          <i className="far fa-heart"></i>
          <i className="fas fa-share"></i>
        </div> */}
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
