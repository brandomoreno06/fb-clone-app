import React, { useRef, useState } from 'react'
import './CreatePost.css';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import { Avatar } from '@material-ui/core';
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';
import { useUserContextValue } from '../ContextProvider';
import db from '../../firebase';
import firebase from 'firebase';


 
const CreatePost = (props) => {

    const [{user}, dispatch] = useUserContextValue();
    const [disabledPost, setDisabledPost] = useState(true);
    const [input, setInput] = useState("");
    const [imageFile, setImageFile] = useState("");
    const [previewImageURL, setPreviewImageURL] = useState("");
    const inputImage = useRef();
    const inputText = useRef();


    const handleInput = (e) => {
        if(e.target.innerHTML.length > 0) { 
            setDisabledPost(false)
            setInput(e.target.innerHTML)
        } else {
            setDisabledPost(true)
            setInput("")
        } 
        if(previewImageURL) {
            setDisabledPost(false)
        }
    }

    const handleImage = (e) => {
        const file = e.target.files[0];
        setImageFile(file);
        setPreviewImageURL(URL.createObjectURL(file));
        setDisabledPost(false)
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        props.isLoading(true);

        let imageURL;
        const imageStorageRef = firebase.storage().ref();
        const uploadImage = imageStorageRef.child('images/' + imageFile.name);
        uploadImage.put(imageFile)
        .then((snapshot) => {
            uploadImage.getDownloadURL()
            .then((url) => {
                imageURL = url;
            })
            .then(() => {
                db.collection('posts').add({
                    message: input,
                    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                    profilePic: user.photoURL,
                    username: user.displayName,
                    image: imageURL,
                })
                props.isLoading(false);
            })
            .catch(error => alert(`error uploading image`))
        })

        inputText.current.innerHTML = "";
        props.closeModal();
    }


  return (
    <div className="create-post">
        <h2>Create Post</h2>
        <CancelOutlinedIcon className="create-post__close" onClick={props.closeModal}/>
        <div className="create-post__header">
            <Avatar src={user.photoURL}/>
            <h4>{user.displayName}</h4>
        </div>

        <div 
            ref={inputText}
            className="create-post__text" 
            placeholder={`What's on your mind, ${user.displayName}?`}
            contentEditable
            onInput={handleInput}
        >
        </div>
        { imageFile && 
            <div className="selectedImage__container">
                <img src={previewImageURL} alt="preview file"></img>
            </div> 
        }

        <div type="file" className="create-post__addImage" onClick={() => {
            inputImage.current.click();
        }}>
            <PhotoLibraryIcon />
            <h4>Add image to your post</h4>
        </div>
        <input ref={inputImage} type="file" accept="image/*" onChange={handleImage}></input>
        <button 
            type="submit" 
            className="create-post__submit"
            disabled={disabledPost}
            onClick={handleSubmit}
        ><h3>Post</h3>
        </button>
    </div>
  )
}
 
 
 
export default CreatePost;
 