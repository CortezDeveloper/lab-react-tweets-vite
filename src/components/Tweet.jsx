import React from 'react';
import ProfileImage from './components/ProfileImage';
import User from './components/User';
import Timestamp from './components/Timestamp';
import Message from './components/Message';
import Actions from './components/Actions';

function Tweet({ tweet }) {
  const { user, timestamp, message } = tweet


  return (
    <div className="tweet">
      <ProfileImage image={IMAGE_URL} />
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
             <User name={USER_NAME} handle={USER_HANDLE} />
          </span>

          <Timestamp time={TWEET_TIMESTAMP} />
        </div>

        <Message message={TWEET_MESSAGE} />

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
