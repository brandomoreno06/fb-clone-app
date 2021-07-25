import React, { useState } from 'react'
import { Avatar } from '@material-ui/core';
import './MessageSender.css';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import CreatePost from './CreatePost';
import { useUserContextValue } from '../ContextProvider';
 
 
 
const MessageSender = (props) => {

  const [{user}, dispatch] = useUserContextValue();
  const [isLoadingPost, setIsLoadingPost] = useState(false);

  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => {
    setShowModal(false)
  }

  const handleCreatePost = (value) => { setIsLoadingPost(value)}


  return (
    <>
      <div className="messageSender">
        {showModal ? 
          <CreatePost closeModal={handleShowModal} isLoading={handleCreatePost}/> :
          <div>
          <div className="messageSender__top">
            <Avatar src={user.photoURL} />
              <button 
                type="button" 
                className="messageSender__top__createPost" 
                onClick={()=> setShowModal(true)}>{`What's on your mind, ${user.displayName}?`}
              </button>
          </div>
          <div className="message-sender__bottom">
            <div className="message-sender__option">
              <VideocamIcon className="videoIcon"/>
              <h4>Live</h4>
            </div>
            <div className="message-sender__option">
              <PhotoLibraryIcon className="photoIcon"/>
              <h4>Photo/Video</h4>
            </div>
            <div className="message-sender__option">
              <InsertEmoticonIcon className="feelingIcon" />
              <h4>Feeling/Activity</h4>
            </div>
          </div>
          </div>
        }
      </div>
      
      {isLoadingPost && <div className="creatingPost_notification">Creating Post...</div> }
    </>
  )
}
 
 
 
export default MessageSender;
 