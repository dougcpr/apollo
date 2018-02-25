// import firebase to create the connection to the db
import firebase from 'firebase'

// setup apiKey, url, and other config information
let config = {
  apiKey: 'AIzaSyAL435_BIKcH02mJ3QtWf0Qj9dSy9uqXl8',
  authDomain: 'apollo-69860.firebaseapp.com',
  databaseURL: 'https://apollo-69860.firebaseio.com',
  projectId: 'apollo-69860',
  storageBucket: 'apollo-69860.appspot.com',
  messagingSenderId: '1054981740946'
}

// intialize firebase app with apiKey and other config files
let app = firebase.initializeApp(config)

// export the connection to the database
export const db = app.database()
