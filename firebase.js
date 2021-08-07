import firebase from 'firebase';
import 'firebase/storage';
const firebaseConfig = {
  apiKey: 'AIzaSyDHjYtLeOC20e8ORdzUJhFA7XrLWVIg9Ac',
  authDomain: 'felix-facebook-clone-yt.firebaseapp.com',
  projectId: 'felix-facebook-clone-yt',
  storageBucket: 'felix-facebook-clone-yt.appspot.com',
  messagingSenderId: '102478349834',
  appId: '1:102478349834:web:10337b82ceabcc0caf01f3',
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };
