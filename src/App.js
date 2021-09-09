import React, { useEffect } from 'react';
import WebcamCapture from './Components/WebCamCapture'
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Preview from './Components/Preview';
import Chats from './Components/Chats';
import ChatView from './Components/ChatView';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from './features/appSlice';
import Login from './Components/Login';
import { auth, } from './firebase';
import {login, logout} from './features/appSlice'

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if(authUser) {
        dispatch(login({
          username: authUser.displayName,
          profilePic: authUser.photoURL,
          id: authUser.uid,
        }))
      }
      else{
        dispatch(logout())
      }
    })
  }, [])

  return (
    <div className="App">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
          <img 
          src="https://lakeridgenewsonline.com/wp-content/uploads/2020/04/snapchat.jpg" alt="SNAPCHAT" className="App_logo"
          />
          <h2 className="Logo">Snapchat Clone</h2>
      <div className="AppBody">
        <div className="app_Bg">
          <Switch>
          <Route path="/chats/view">
              <ChatView />
            </Route>
            <Route path="/chats">
              <Chats />
            </Route>
            
            <Route path="/preview">
              <Preview />
            </Route>

            <Route exact path="/">
            <WebcamCapture />
            </Route>
          </Switch>
          </div>
        </div>
        </>
        )}
      </Router>  
      <h2 className="Logo">By: Ghani Rehman</h2>
    </div>
  );
}

export default App;
