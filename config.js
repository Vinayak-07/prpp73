import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyAw8_i46nM2MVav51gmkOwrdt3Ws2ZWc0w",
  authDomain: "prop-73.firebaseapp.com",
  projectId: "prop-73",
  storageBucket: "prop-73.appspot.com",
  messagingSenderId: "32890928093",
  appId: "1:32890928093:web:00273c0d0c8a7c1fd15434"
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

