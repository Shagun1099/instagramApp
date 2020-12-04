import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAu-QlQSOcDtX16soxH4Sr9zPNVoKFosWI",
  authDomain: "instagram-byshagun.firebaseapp.com",
  projectId: "instagram-byshagun",
  storageBucket: "instagram-byshagun.appspot.com",
  messagingSenderId: "25333548461",
  appId: "1:25333548461:web:5833fb2131b78212af8d24",
  measurementId: "G-HN0CNW92XG"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };