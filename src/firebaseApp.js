import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyCZzAZK33OnZLSLQ39BUxsEifii1kwXjNw",
  authDomain: "turnout-63a4c.firebaseapp.com",
  databaseURL: "https://turnout-63a4c.firebaseio.com",
  projectId: "turnout-63a4c",
  storageBucket: "",
  messagingSenderId: "1095870265526",
  appId: "1:1095870265526:web:c10544330c44883a670e17",
  measurementId: "G-S9PEG72GQJ"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig)
export const eventsRef = firebaseApp.database().ref().child('events')