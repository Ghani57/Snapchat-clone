import React, { useCallback, useRef} from 'react'
import Webcam from 'react-webcam';
import { useDispatch } from 'react-redux';
import { setCameraImage } from '../features/cameraSlice';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import './index.css';
import { useHistory } from 'react-router';

const videoConstraints = {
     width: 250,
     height: 400,
     facingMode: "user"
};

function WebCamCapture() {

     const webcamRef = useRef(null);
     const dispatch = useDispatch();
     const history = useHistory();

     const capture = useCallback(() => {
          const imageSrc = webcamRef.current.getScreenshot();
          dispatch(setCameraImage(imageSrc));
          history.push("/preview");
     }, [webcamRef]);

     return (
          <div className="WebCamCapture">
               <Webcam
               audio={false}
               height={videoConstraints.height}
               ref={webcamRef}
               screenshotFormat="image/jpeg"
               width={videoConstraints.width}
               videoConstraints={videoConstraints}
               />

               <RadioButtonUncheckedIcon
               onClick={capture}
               className="WebCamCapture_Btn"
               fontSize="large"
               />

               {/* <img src={imageSrc} alt="NoPic" /> */}
          </div>
     )
}

export default WebCamCapture
