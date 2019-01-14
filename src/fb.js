import firebase from 'firebase/app';
import 'firebase/firestore'

var config = {
  apiKey: "AIzaSyCZaXlJKRsUOemq_7xRNQPsz8vQ0FKoUaw",
  authDomain: "nn-project-manager.firebaseapp.com",
  databaseURL: "https://nn-project-manager.firebaseio.com",
  projectId: "nn-project-manager",
  storageBucket: "nn-project-manager.appspot.com",
  messagingSenderId: "601404472314"
};
firebase.initializeApp(config);
const db = firebase.firestore();

db.settings({ timestampsInSnapshots: true });

export default db;