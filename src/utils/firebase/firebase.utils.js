import { initializeApp } from 'firebase/app';
import { 
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
 } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAFInhL-LF7Vp7aChqf9eNyD9BjJBkpWiQ",
    authDomain: "clothing-website-db-310c5.firebaseapp.com",
    projectId: "clothing-website-db-310c5",
    storageBucket: "clothing-website-db-310c5.firebasestorage.app",
    messagingSenderId: "229059053166",
    appId: "1:229059053166:web:fe30a527f0c4ba92ab087f"
  };
  
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: "select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);