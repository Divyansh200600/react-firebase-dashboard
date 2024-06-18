// src/components/LoginComponent/GoogleLogin.jsx
import React from 'react';
import { auth, firestore } from '../../utils/Firebase/firebaseConfig';  // Adjust the path as per your project structure
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';

const GoogleLogin = () => {
  const [user] = useAuthState(auth);

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      console.log("Signed in successfully");
    } catch (error) {
      console.error("Error signing in with Google: ", error);
    }
  };

  return (
    <div>
      {user ? (
        <button onClick={() => signOut(auth)}>Sign Out</button>
      ) : (
        <button onClick={signInWithGoogle}>Sign in with Google</button>
      )}
    </div>
  );
};

export default GoogleLogin;
