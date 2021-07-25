import React from 'react';
import './Story.css';
import { Avatar } from '@material-ui/core';
 
 
 
const Story = ({ imageSrc, profileSrc, title }) => {
  return (
    <div className="story">
        <Avatar className="story__avatar" src={profileSrc} />
        <h4>{title}</h4>
        <div className="story__background-image">
            <img src={imageSrc} alt="user" />
        </div>
    </div>
  )
}
 
 
 
export default Story;