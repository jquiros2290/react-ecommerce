import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBU7h8_1ZfmzJZSXPYkjdCANxWCd7CD794',
  authDomain: 'crown-db-d400e.firebaseapp.com',
  databaseURL: 'https://crown-db-d400e.firebaseio.com',
  projectId: 'crown-db-d400e',
  storageBucket: 'crown-db-d400e.appspot.com',
  messagingSenderId: '1076759689802',
  appId: '1:1076759689802:web:70b34de3f398e09bbc04b3',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;