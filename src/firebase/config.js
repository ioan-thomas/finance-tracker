import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCr81sMcPuxGF5_bn8C2bk5chn5a9Q3KtU",
    authDomain: "mymoney-74ac4.firebaseapp.com",
    projectId: "mymoney-74ac4",
    storageBucket: "mymoney-74ac4.appspot.com",
    messagingSenderId: "927934089224",
    appId: "1:927934089224:web:7619e7c07b20d08b28e9bd"
  };

//   init firebase

firebase.initializeApp(firebaseConfig)

// init service 
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const timestamp = firebase.firestore.Timestamp


export { projectFirestore, projectAuth, timestamp }
