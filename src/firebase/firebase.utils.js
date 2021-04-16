import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCzIKf03wMXwLUjEKtEISFHjH7eOiTyNjk",
    authDomain: "react-ecom-crown-db.firebaseapp.com",
    projectId: "react-ecom-crown-db",
    storageBucket: "react-ecom-crown-db.appspot.com",
    messagingSenderId: "931591593422",
    appId: "1:931591593422:web:e5e1b3cf10d0155ba25f9f"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
