import React from 'react'
import './index.css'
import {Avatar } from '@material-ui/core';
import StopRoundedIcon from '@material-ui/icons/StopRounded'
import ReactTimeago from 'react-timeago'
import {useDispatch, useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';
import {db} from '../firebase';
import { selectImage } from '../features/appSlice';

function Chat({id, username, timestamp, read, imageUrl, profilePic}) {
     // const selectedImage = useSelector(selectImage);
     const dispatch = useDispatch();
     const history = useHistory();
     

     const open  = () => {
          if(!read) {
               dispatch(selectImage(imageUrl));
               db.collection("posts").doc(id).set(
                    {
                         read: true,
                    },
                    {
                         merge: true
                    }
               )
               history.push("/chats/view");
          }
     }
     return (
          <div className="chat" onClick={open}>
               <Avatar className="chat_avatar" src={profilePic} />
               <div className="chat_info">
                    <h4>{username}</h4>
                    <p>
                         
                         {!read && "Tap to view - "}
                         <ReactTimeago date={new Date(timestamp?.toDate()).toUTCString()} /></p>
               </div>

               {!read && <StopRoundedIcon className="chat_readIcon" />}
          </div>
     )
}

export default Chat
