import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyApG6b9t_uBsjl5eU_YPf9ynjAB4zqb9OA",
  authDomain: "learning-22445.firebaseapp.com",
  projectId: "learning-22445",
  storageBucket: "learning-22445.appspot.com",
  messagingSenderId: "160564657714",
  appId: "1:160564657714:web:12328c3695f4ed8bf6862b",
  measurementId: "G-EEKD3GMEZE"
};

const app = firebase.initializeApp(firebaseConfig);

export default app;
