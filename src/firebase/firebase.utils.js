import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDgC5y2ft4MEgighv6E6SdzdJ3fPmIVF_k",
    authDomain: "ecommerce-db-2b835.firebaseapp.com",
    databaseURL: "https://ecommerce-db-2b835.firebaseio.com",
    projectId: "ecommerce-db-2b835",
    storageBucket: "ecommerce-db-2b835.appspot.com",
    messagingSenderId: "923461317723",
    appId: "1:923461317723:web:4abfa060b316cf4681fb7e",
    measurementId: "G-QZR6PSTDKD"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;