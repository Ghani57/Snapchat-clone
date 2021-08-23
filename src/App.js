import React from 'react';
import Header from './Components/Header';
import Home from './Components/Home'
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Details from './Components/Details';
import Login from './Components/Login';
import styled from 'styled-components';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Switch>
          <Route path="/detail/:id">
            <Details />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
      <AboutMe >
          &copy;2021 Ghani Rehman CSE UET Mardan
        </AboutMe>
    </div>
  );
}

export default App;

const AboutMe = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    color: white;
    margin-top: 10px;
    font-size: 20px;
    background-image: linear-gradient(to right, red, green);
    padding: 8px;
`