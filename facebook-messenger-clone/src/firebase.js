import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCWK_5-8ksU418qN_dyqSWQd73LXY6FpDY",
  authDomain: "facebook-messenger-clone-7f8cc.firebaseapp.com",
  projectId: "facebook-messenger-clone-7f8cc",
  storageBucket: "facebook-messenger-clone-7f8cc.appspot.com",
  messagingSenderId: "672849239857",
  appId: "1:672849239857:web:34615ae52ec9aa2df91a10",
  measurementId: "G-QLLJPZPYSZ",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export default db;

// // import firebase from "firebase";
// import firebase from "firebase";

// const firebaseApp = firebase.initializeApp({
//   apiKey: "AIzaSyCWK_5-8ksU418qN_dyqSWQd73LXY6FpDY",
//   authDomain: "facebook-messenger-clone-7f8cc.firebaseapp.com",
//   projectId: "facebook-messenger-clone-7f8cc",
//   storageBucket: "facebook-messenger-clone-7f8cc.appspot.com",
//   messagingSenderId: "672849239857",
//   appId: "1:672849239857:web:34615ae52ec9aa2df91a10",
//   measurementId: "G-QLLJPZPYSZ",
// });

// const db = firebaseApp.firestore();

// export default db;
