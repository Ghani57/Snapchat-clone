import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import db from '../firebase';
import { setMovies } from '../Features/Movies/MovieSlice';

const Detials = () => {
     
     const {id} = useParams();
     const [movie, setMovie] = useState();

     useEffect(() => {
          db.collection("movies")
          .doc(id)
          .get()
          .then((doc) => {
            if(doc.exists){
                 setMovie(doc.data());
            }
          })
     },[])
     
     return (
          <Container>
               {movie && (
               <>
               <Background>
                    <img src={movie.backgroundImg} alt="BG" />
               </Background>

               <ImgTitle>
                    <img src={movie.titleImg} alt="Cindo" />
               </ImgTitle>

               <Controls>
                    <PlayButton>
                         <img src="/images/play-icon-black.png" alt="playBtn" />
                         <span>PLAY</span>
                    </PlayButton>

                    <TrailorButton>
                         <img src="/images/play-icon-white.png" alt="playBtn" />
                         <span>TRAILOR</span>
                    </TrailorButton>

                    <AddButton>
                         <span>+</span>
                    </AddButton>

                    <GroupButton>
                         <span>
                         <img src="/images/group-icon.png" alt="playBtn" />
                         </span>
                    </GroupButton>
               </Controls>
               <SubTitle>
                         {movie.subTitle}
               </SubTitle>

               <Description>
                    {movie.description}
               </Description>
               </>
               )}
          </Container>
     )
}

export default Detials

const Container = styled.div`
     min-height: calc(100vh - 30px);
     padding: 0 calc(3.5vw + 5px);
     position: relative;

     
`

const Background = styled.div`
     position:fixed;
     top:0;
     left:0;
     right:0;
     bottom:0;
     z-index: -1;
     opacity: 0.5;

     img{
          width: 100%;
          height:100%;
          object-fit:cover;
     }

`

const ImgTitle = styled.div`
     height: 30vh;
     min-height: 450px;
     width: 60vw;
     min-width: 200px;
     margin-top: 60px;
     margin-left: -160px;

     img{
          width: 100%;
          height:100%;
          object-fit:contain;
     }
`

const Controls = styled.div`
     display:flex;
`

const PlayButton = styled.button`
     border-radius: 4px;
     font-size: 15px;
     display: flex;
     margin-right: 22px;
     align-items: center;
     padding: 0px 24px;
     height: 56px;
     background: rgb(249, 249, 249);
     border: none;
     letter-spacing: 2px;
     font-weight: bold;
     transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

     &:hover{
          transform: scale(1.2);
          background: rgb(198, 198, 198);
     }
     
`

const TrailorButton = styled(PlayButton)`
     background : rgba(0, 0, 0, 0.3);
     border: 1px solid rgb(249, 249, 249);
     color: rgb(249, 249, 249);
`

const AddButton = styled(PlayButton)`
     border-radius: 50%;
     display: flex;
     align-items: center;
     justify-content: center;
     width: 44px;
     height: 44px;
     background : rgba(0, 0, 0, 0.3);
     border: 1px solid rgb(249, 249, 249);
     color: rgb(249, 249, 249);
     margin-top: 5px;

     span{
          font-size: 30px;
          color: white;
     }
`

const GroupButton = styled.button`
     border-radius: 50%;
     display: flex;
     align-items: center;
     justify-content: center;
     width: 44px;
     height: 44px;
     background : rgba(0, 0, 0, 0.3);
     border: 1px solid rgb(249, 249, 249);
     color: rgb(249, 249, 249);
     margin-top: 5px;
     transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;


     &:hover{
          transform: scale(1.2);
          background: rgb(198, 198, 198);
     }
`

const SubTitle = styled.div`
     margin-top: 10px;
`

const Description = styled.div`
     marin-top: 15px;
     font-size: 16px;
     width: 40%;
`