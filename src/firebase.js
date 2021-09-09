import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
     apiKey: "AIzaSyAzJMxAV-2MIrtxwiS-ZX5zO1Dsn3_P1h8",
     authDomain: "snapchat-clone-b6666.firebaseapp.com",
     projectId: "snapchat-clone-b6666",
     storageBucket: "snapchat-clone-b6666.appspot.com",
     messagingSenderId: "656484030879",
     appId: "1:656484030879:web:19905037a2e44a21ac85aa",
     measurementId: "G-02LK55L2V6"
   };

   const firebaseApp = firebase.initializeApp(firebaseConfig);
   const db = firebaseApp.firestore();
   const auth = firebase.auth();
   const storage = firebase.storage();
   const provider = new firebase.auth.GoogleAuthProvider();

   export { db , auth, storage, provider};