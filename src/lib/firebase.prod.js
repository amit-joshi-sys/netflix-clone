import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
// import { seedDatabase } from "../seed";
const config = {
  apiKey: "AIzaSyBQbjxvqh2avA34DYgcSeu1XKgl8GI0u-c",
  authDomain: "netflix-cb3ed.firebaseapp.com",
  databaseURL: "https://netflix-cb3ed-default-rtdb.firebaseio.com",
  projectId: "netflix-cb3ed",
  storageBucket: "netflix-cb3ed.appspot.com",
  messagingSenderId: "807268063004",
  appId: "1:807268063004:web:d41c1aaafd18ba57480cd9",
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

export { firebase };
