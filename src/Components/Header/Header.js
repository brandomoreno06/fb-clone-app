import React, { useState } from 'react'
import './Header.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useUserContextValue } from '../ContextProvider';
import { auth } from '../../firebase';
import { actionTypes } from '../reducer';

 
 
const Header = props => {

    const [{user}, dispatch] = useUserContextValue();

    const handleSignOut = () => {
        auth.signOut()
        .then(() => {
            dispatch({
                type: actionTypes.SIGN_OUT,
            })
        })

    }

    return (
        <div className="header">
            <div className="header__left">
                <FacebookIcon />
                <div className="header__left__search">
                    <SearchIcon />
                    <input type="text" className="header__search__input" placeholder="Search facebook"></input>
                </div>
            </div>
            <div className="header__middle">
                <div className="header__middle__option header__middle__option--active" >
                    <HomeIcon />
                </div>
                <div className="header__middle__option" >
                    <FlagIcon />
                </div>
                <div className="header__middle__option" >
                    <SubscriptionsOutlinedIcon />
                </div>
                <div className="header__middle__option" >
                    <StorefrontOutlinedIcon />
                </div> 
                <div className="header__middle__option" >
                    <SupervisedUserCircleIcon />
                </div>                   
            </div>
            <div className="header__right">
                <div className="header__right__info">
                    <Avatar src={user.photoURL}/>
                    <h4>{user.displayName}</h4>
                </div>
                <div  className="signOut__button expandMore" onClick={handleSignOut}>Sign out</div>
                <IconButton>
                    <AddIcon />
                </IconButton>
                <IconButton>
                    <ForumIcon />
                </IconButton>
                <IconButton>
                    <NotificationsActiveIcon />
                </IconButton>
                <IconButton>
                    <ExpandMoreIcon />
                </IconButton>
                
            </div>
        </div>
    )
}
 
 
 
export default Header
 