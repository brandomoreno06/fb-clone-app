import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyAofuIG6J-UE9SggiDgQUtjD8eiCfZ_l1o",
  authDomain: "clone-app-fb.firebaseapp.com",
  projectId: "clone-app-fb",
  storageBucket: "clone-app-fb.appspot.com",
  messagingSenderId: "634521056243",
  appId: "1:634521056243:web:723fc976fe049f5af69886",
  measurementId: "G-331MW7S2ZZ"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();


export { auth, provider };
export default db;