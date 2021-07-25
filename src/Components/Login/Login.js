import { useReducer } from 'react';
import { Button } from '@material-ui/core';
import React from 'react'
import './Login.css';
import { auth, provider } from "../../firebase";
import { useUserContextValue } from "../ContextProvider";
import { actionTypes } from '../reducer';


const Login = (props) => {

    const [state, dispatch] = useUserContextValue();

    const signInHandle = () => {
        auth
        .signInWithPopup(provider)
        .then((result) => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            })
        })
        .catch((error) => console.log(error))
    }
    

  return (
    <div className="login">
        <div className="login__logo">
            <img 
                src="https://www.logo.wine/a/logo/Facebook/Facebook-f_Logo-Blue-Logo.wine.svg"
                alt="facebook logo"
                className="mainLogo"
            />
            <img
                src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg"
                alt="facebook name"
                className="nameLogo"
            />
        </div>
        <Button type="sumit" onClick={signInHandle} >Sign in with<img src="https://img.icons8.com/color/48/000000/google-logo.png" alt="G"/>oogle</Button>
    </div>
  )
}
 
 
 
export default Login;
 