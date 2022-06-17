import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    // setup config variables
    apiKey: 'AIzaSyB0jri1jBZQu7EgOZ31mo2I91-tJe8S8vw',
    authDomain: 'crwn-db-clone.firebaseapp.com',
    projectId: 'crwn-db-clone',
    storageBucket: 'crwn-db-clone.appspot.com',
    messagingSenderId: '34956986391',
    appId: '1:34956986391:web:d056d7bf4ec3e27d98f452',
};

// initializing firebase app here...
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
