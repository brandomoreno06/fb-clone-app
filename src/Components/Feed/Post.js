import { Avatar } from '@material-ui/core';
import React from 'react'
import './Post.css';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import NearMeIcon from '@material-ui/icons/NearMe';
import parse from 'html-react-parser'; 
 
const Post = ({profilePic, image, username, timestamp, message}) => {
  return (
    <div className="post">
        <div className="post__top">
            <Avatar src={profilePic} className="post__avatar" />
            <div className="post__topInfo">
                <h3>{username}</h3>
                <h4>{new Date(timestamp?.toDate()).toUTCString()}</h4>
            </div>
        </div>

        <div className="post__bottom">
            <p>{parse(message)}</p>
        </div>

        <div className="post__image">
            <img src={image} alt=""/>
        </div>

        <div className="post__options">
            <div className="post__option">
                <ThumbUpIcon />
                <h4>Like</h4>
            </div>
            <div className="post__option">
                <ChatBubbleOutlineIcon />
                <h4>Comment</h4>
            </div>
            <div className="post__option">
                <NearMeIcon />
                <h4>Share</h4>
            </div>
        </div>

    </div>
  )
}
 
 
 
export default Post;
 