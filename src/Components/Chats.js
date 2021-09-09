import React, { useEffect, useState } from 'react'
import {Avatar } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search'
import ChatBubbleIcon from '@material-ui/icons/ChatBubble'
import { db, auth } from '../firebase';
import './index.css'
import Chat from './Chat'
import { useSelector } from 'react-redux';
import { selectUser } from '../features/appSlice';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import { useHistory } from 'react-router-dom';
import { resetCameraImage } from '../features/cameraSlice';
import {useDispatch} from 'react-redux';

function Chats() {
     const [posts, setPosts] = useState([]);
     const user = useSelector(selectUser);
     const history = useHistory();
     const dispatch = useDispatch();

     useEffect(() => {
          db.collection("posts")
          .orderBy("timestamp","desc")
          .onSnapshot((snapshot) => {
               setPosts(
                    snapshot.docs.map((doc) => ({
                         id: doc.id,
                         data: doc.data(),
                    }))
               )
          })
     }, [])

     const takeSnap = () => {
          dispatch(resetCameraImage());
          history.push("/");
     }
     return (
          <div className="chats">
               <div className="chats_header">
                    <Avatar src={user.profilePic} className="chats_avatar" onClick={() => auth.signOut()}/>
                    <div className="chats_search">
                         <SearchIcon className="SearchIcon" />
                         <input type="text" placeholder="Friends.." />

                    </div>
                    <ChatBubbleIcon className="chats_chatIcon" />
               </div>

               <div className="chat_posts">
                    {posts.map(
                         ({
                            id,
                            data:{ profilePic, username, timestamp, imageUrl, read},

                         }) => (
                              <Chat
                              key={id}
                              id={id}
                              username={username}
                              timestamp={timestamp}
                              imageUrl={imageUrl}
                              read={read}
                              profilePic={profilePic}
                              />
                    )
                    )}
               </div>

               <RadioButtonUncheckedIcon
               className="chats_TakePic"
               onClick={takeSnap}
               fontsize='large'
               />
          </div>
     )
}

export default Chats
