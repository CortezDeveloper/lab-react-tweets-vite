import React from 'react';

function ProfileImage(props) {
  return (
    <img
      src={props.image}
      className="profile"
      alt="profile"
    />
    // <img
    //   src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/ih_logo.jpeg"
    //   className="profile"
    //   alt="profile"
    // />
  );
}

export default ProfileImage;