import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { resetCameraImage, selectcameraImg } from '../features/cameraSlice';
import TextFieldsIcon from '@material-ui/icons/TextFields';
import NoteIcon from '@material-ui/icons/Note';
import CreateIcon from '@material-ui/icons/Create';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import CropIcon from '@material-ui/icons/Crop';
import CloseIcon from '@material-ui/icons/Close';
import TimerIcon from '@material-ui/icons/Timer';
import SendIcon from '@material-ui/icons/Send';
import './index.css'
import {v4 as uuid } from 'uuid';
import firebase from 'firebase';
import {db , storage} from '../firebase'
import { selectUser } from '../features/appSlice';



const Preview = () => {
     
     const cameraImage = useSelector(selectcameraImg);
     const user = useSelector(selectUser);
     const history = useHistory();
     const dispatch = useDispatch();

     useEffect(() => {
          if(!cameraImage) {
               history.replace('/');
          }
     }, [cameraImage, history]);

     const ClosePreview = () => {
          dispatch(resetCameraImage());
     }

     const sendPost = () => {
     const id = uuid();
     const uploadTask = storage
     .ref(`posts/${id}`)
     .putString(cameraImage, "data_url");

     uploadTask.on(
          "state_changed",
          null,
          (error) => {
               console.log(error);
          },
          () => {
               storage.ref("posts")
               .child(id)
               .getDownloadURL()
               .then((url) => {
                    db.collection('posts').add({
                         imageUrl: url,
                         username: user.username,
                         read: false,
                         profilePic: user.profilePic,
                         timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                    })
                    history.replace("/chats");
               });
          }
     );
     };

     return (
          <div className="preview">
          <CloseIcon 
          onClick={ClosePreview}
          className="Close_Preview"
          />
          <div className="preview_ToolBar_Right">
               <TextFieldsIcon />
               <CreateIcon />
               <NoteIcon />
               <MusicNoteIcon />
               <AttachFileIcon />
               <CropIcon />
               <TimerIcon />
          </div>
          <img src={cameraImage} alt="" />
          <div className="Preview_Footer" onClick={sendPost}>
               <h2>Send Now</h2>
               <SendIcon className="SendIcon" fontSize="small" />
          </div>
          </div>
     )
}

export default Preview;
