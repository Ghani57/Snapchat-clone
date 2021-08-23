import React from 'react'
import styled from 'styled-components'

function Login() {
     return (
          <Container>
               <Background>
                    <img src="images/login-background.jpg" />
               </Background>

               <CTA>
                    <CTALogoOne src="images/cta-logo-one.svg" />

                    <SignUp>
                    GEL ALL THERE.....
                    </SignUp>          

                    <Description>
                         Hello and Welcome, this is our Signin page. This disney+ clone was create just for practice
                         and just for taking my skills to the next level : )...
                    </Description>

                    <CTALogoTwo src="images/cta-logo-two.png" />
               </CTA>
          </Container>
     )
}

export default Login

const Container = styled.div`
     height: calc(100vh - 30px);
     display: flex;
     align-items: center;
     justify-content: center;
     overflow: hidden;
`

const Background = styled.div`
     position:fixed;
     top:0;
     left:0;
     right:0;
     bottom:0;
     z-index: -1;
     opacity: 1;

     img{
          width: 100%;
          height:100%;
          object-fit:cover;
     }

`

const CTA = styled.div`
     max-width: 650px;
     padding: 80px 40px;
     width: 80%;
     display: flex;
     flex: 1;
     flex-direction: column;
`

const CTALogoOne = styled.img``    

const SignUp = styled.button`
     width: 100%;
     background-color: #0063e5;
     font-weight: bold;
     padding: 17px 0;
     color: #f9f9f9;
     border-radius: 4px;
     text-align: center;
     font-size: 18px;
     cursor: pointer;
     margin-top: 8px;
     transition: all 250ms;
     margin-top: 8px;

     &:hover{
          background: darkblue;
     }
`

const Description = styled.div`
     width: 60%;
     text-align: center;
     margin-left: 100px;
     letter-spacing: 1.6px;
     margin-top: 10px;
     margin-bottom: 13px;

`

const CTALogoTwo = styled.img``    