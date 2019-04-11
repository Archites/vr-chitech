import firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyA8_QEUXbgz3qZTAQkYldpMNBuVd7uv3-Y',
  authDomain: 'vr-chitech.firebaseapp.com',
  databaseURL: 'https://vr-chitech.firebaseio.com',
  projectId: 'vr-chitech',
  storageBucket: 'vr-chitech.appspot.com',
  messagingSenderId: '294689746221',
}

export default firebase.initializeApp(config)
