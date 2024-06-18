// src/utils/FireBaseConfig/fireBaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdMsQs9AsrrtNzJ3XKjVknp-g4-6EBC9Q",
  authDomain: "react-db-50552.firebaseapp.com",
  projectId: "react-db-50552",
  storageBucket: "react-db-50552.appspot.com",
  messagingSenderId: "827715182562",
  appId: "1:827715182562:web:98bd0874d66d3a82fae3bb",
  measurementId: "G-X3KDG21PB3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const firestore = getFirestore(app);
const storage = getStorage(app);

// Create 'db' instance directly from 'firestore'
const db = firestore;

export { app, auth, firestore, storage, db };
