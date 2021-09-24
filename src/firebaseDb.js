import * as firebase from 'firebase'

const firebaseConfig = {
    apiKey: 'AIzaSyCtpRP9tvaG7h_IdKETqVRL54eP7Pf5rYw',
    authDomain: 'my-subscriptions-3d6a3.firebaseapp.com',
    projectId: 'my-subscriptions-3d6a3',
    storageBucket: 'my-subscriptions-3d6a3.appspot.com',
    messagingSenderId: '55121253937',
    appId: '1:55121253937:web:d847cf12614df25c422710'
  };
  
const firebaseApp = firebase.initializeApp(firebaseConfig)

export const db = firebaseApp.firestore()
