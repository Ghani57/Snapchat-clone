import { Button } from '@material-ui/core'
import React from 'react'
import './index.css'
import {auth, provider} from '../firebase'
import {login} from '../features/appSlice'
import {useDispatch} from 'react-redux';

function Login() {
     const dispatch = useDispatch()
     const signin = () => {
          auth.signInWithPopup(provider)
          .then((result) => {
               dispatch(
                    login({
                         username: result.user.displayName,
                         profilePic: result.user.photoURL,
                         id: result.user.uid,
                    })
               )
          }).catch((error) => alert(error.message));
     };
     return (
          <div className="Login">
               <div className="Login_container">
                    <img src="https://scx2.b-cdn.net/gfx/news/2017/1-snapchat.jpg" alt="Snapchat" />
                    <Button variant="outlined" onClick={signin}>
                         Sign In
                    </Button>
               </div>
          </div>
     )
}

export default Login
