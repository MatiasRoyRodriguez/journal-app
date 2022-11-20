// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyBFX65JPcobnGE2Ruv4cMrhlmM5tzhYkBI",
	authDomain: "react-cursos-75d92.firebaseapp.com",
	projectId: "react-cursos-75d92",
	storageBucket: "react-cursos-75d92.appspot.com",
	messagingSenderId: "579147754245",
	appId: "1:579147754245:web:e9ab2a115060aa50f1e56c"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);