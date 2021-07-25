import React from 'react'
import './Stories.css';
import Story from './Story';
import userImage from "../../assets/man.png"
 
 
const Stories = (props) => {
  return (
    <div className="stories__container">
      <div className="stories">
          <Story 
          imageSrc="https://images.unsplash.com/photo-1552308995-2baac1ad5490?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
          profileSrc={userImage}
          title="Brando Moreno"
          />
          <Story 
          imageSrc="https://images.unsplash.com/photo-1618477388954-7852f32655ec?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"
          profileSrc={userImage}
          title="Juan dela Cruz"
          />
          <Story 
          imageSrc="https://images.unsplash.com/photo-1552308995-2baac1ad5490?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
          profileSrc={userImage}
          title="Armando Caruso"
          />
          <Story 
          imageSrc="https://images.unsplash.com/photo-1549333580-4cb2c5c8e421?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=80"
          profileSrc={userImage}
          title="Armando Cruz"
          />
          <Story 
          imageSrc="https://images.unsplash.com/photo-1618254170747-35f7ba2f9a6e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
          profileSrc={userImage}
          title="Pedro Penduko"
          />
      </div>
    </div>
  )
}
 
 
 
export default Stories;