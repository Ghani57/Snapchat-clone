import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import { selectSelectedImage } from '../features/appSlice'
import {useSelector} from 'react-redux';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import './index.css';

function ChatView() {
     const selectedImage = useSelector(selectSelectedImage);
     const history = useHistory();

     useEffect(() => {
          if(!selectedImage) {
               exit();
          }
     },[selectedImage]);

     const exit = () => {
          history.replace("/chats");
     }
     return (
          <div className="chat_view">
               <img src={selectedImage} onClick={exit} alt="" />

               <div className="chat_view_timer">
                    <CountdownCircleTimer
                    isPlaying
                    duration={10}
                    strokeWidth={6}
                    size={50}
                    colors={[
                         ["#004777",0.33],
                         ["#F7B801",0.33],
                         ["#A30000",0.33],
                    ]}
                    >
                         {/* {({ remaningTime }) => {
                              if(remaningTime === 0) {
                                   exit();
                              }
                              return remaningTime;
                         }} */}

                         {({ remainingTime}) => {
                              if(remainingTime === 0){
                                   exit();
                              }
                              return remainingTime;
                         }}
                    </CountdownCircleTimer>
               </div>
          </div>
     )
}

export default ChatView
