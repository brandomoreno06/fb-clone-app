import React, { useEffect, useState } from 'react'
import './Feed.css';
import MessageSender from './MessageSender';
import Stories from './Stories';
import Post from './Post';
import db from "../../firebase";
import { useUserContextValue } from '../ContextProvider';
 
 
const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [{user}, dispatch] = useUserContextValue();

  useEffect(() => {
    if(user) {
      db.collection('posts')
        .orderBy('timestamp', 'desc')
        .onSnapshot((snapshot) => 
          setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
      );
    }
  }, []);

  return (
    <div className="feed">
        <Stories />
        <MessageSender />
        
        {posts.map(post => {
          return (
          <Post
            key={post.id}
            profilePic={post.data.profilePic}
            message={post.data.message}
            timestamp={post.data.timestamp}
            username={post.data.username}
            image={post.data.image}
          />
          )
        })

        }

        <div className="footer">
          <h4>Created by: <strong>Brando Moreno</strong></h4>
        </div>
    </div>
  )
}
 
 
 
export default Feed;
 