import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyB5es18GrTiQ2HJa9e8U4ulPfTlZLnIp1Q",
  authDomain: "facebook-clone-5423d.firebaseapp.com",
  projectId: "facebook-clone-5423d",
  storageBucket: "facebook-clone-5423d.appspot.com",
  messagingSenderId: "405197376306",
  appId: "1:405197376306:web:1e5a76442ea7755597e52b",
  measurementId: "G-G3S2FXY1W2"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();


export { auth, provider };
export default db;