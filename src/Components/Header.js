import React, {useEffect} from 'react'
import styled from 'styled-components'
import { findRenderedComponentWithType } from 'react-dom/test-utils';
import { selectUserName, selectUserPhoto, setUserLogin, setSignOut } from '../Features/User/UserSlice'
import { useDispatch, useSelector} from 'react-redux';
import { auth, provider} from '../firebase'
import {useHistory} from 'react-router-dom';


function Header() {
     const dispatch = useDispatch();
     const history = useHistory();
     const userName = useSelector(selectUserName);
     const userPhoto = useSelector(selectUserPhoto);

     useEffect(() => {
          auth.onAuthStateChanged(async (user) => {
               if(user){
                    dispatch(setUserLogin({
                         name: user.displayName,
                         email: user.email,
                         photo: user.photoURL  
                    }))
                    history.push("/");
               }
          })
     }, [])

     const signIn = () => {
          auth.signInWithPopup(provider)
          .then( (res) => {
               let user = res.user
               dispatch(setUserLogin({
                    name: user.displayName,
                    email: user.email,
                    photo: user.photoURL
               }))
          history.push('/');
          } )
     }

     const LogOut = () => {
          auth.signOut()
          .then(() => {
               dispatch(setSignOut());
               history.push('/login')
          })
     }

     return (
          <Nav>
               <Logo src="/images/logo.svg" />
               { !userName ? (
                    <LoginContainer>
                    <Login onClick={signIn}>LOGIN</Login>
                    </LoginContainer>
               ) : 
               <>
               <NavMenu>
               <a href="/">
                    <img src="/images/home-icon.svg" />
                    <span> HOME </span>
               </a>

               <a>
                    <img src="/images/search-icon.svg" />
                    <span> SEARCH </span>
               </a>

               <a>
                    <img src="/images/original-icon.svg" />
                    <span> ORIGINALS </span>
               </a>

               <a>
                    <img src="/images/watchlist-icon.svg" />
                    <span> WATCHLIST </span>
               </a>

               <a>
                    <img src="/images/movie-icon.svg" />
                    <span> MOVIES </span>
               </a>

               <a>
                    <img src="/images/series-icon.svg" />
                    <span> SERIES </span>
               </a>
               </NavMenu>
               

               <UserImg onClick={LogOut}
               src={userPhoto} alt ="Avatar"/>
               </>
}
          </Nav>
               
          
     )
}

export default Header

//Stylings
const Nav = styled.nav`
     display: flex;
     align-items: center;
     padding: 0 36px;
     background: #090b13;
     height: 70px;
`

const Logo = styled.img`
     width: 80px;
`
const NavMenu = styled.div`
     display: flex;
     flex: 1;
     margin-left: 20px;
     align-items: center;

     a:hover{
          text-decoration:none;
     }
     a {
          display:flex;
          align-items:center;
          color: white;
          letter-spacing: 3px;
          padding: 0 12px;
          cursor: pointer;
          img {
               width: 20px;
               height: 20px;
          }

          span{
               font-size: 15px;
               position: relative;
     
               &:after {
                    content: "";
                    left:0;
                    right:0;
                    background: white;
                    bottom: -5px;
                    height: 2px;
                    opacity: 0;
                    position: absolute;
                    transform-origin: center right left;
                    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                    transform: scaleX(0);
               }
          }
          &:hover {
               span:after {
                    transform: scaleX(1);
                    opacity:1;
               }
          }
     }    
`

const UserImg = styled.img`
     width: 70px;
     height: 70px;
     border-radius: 50px;
     cursor: pointer;
     border: 1px solid gray;
`

const Login = styled.div`
     border : 1px solid #f9f9f9;
     padding: 8px 16px;
     border-radius: 4px;
     letter-spacing: 1.8;
     background-color: rgba( 0, 0, 0, 0.6);
     transition: all 0.2s ease 0s;
     cursor: pointer;

     &:hover {
          background-color: #f9f9f9;
          color: #000;
          border-color: transparent;
     }
`

const LoginContainer= styled.div `
     flex: 1;
     display: flex;
     justify-content: flex-end;
`