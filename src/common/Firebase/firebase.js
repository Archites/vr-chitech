import app from 'firebase/app'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyA8_QEUXbgz3qZTAQkYldpMNBuVd7uv3-Y',
  authDomain: 'vr-chitech.firebaseapp.com',
  databaseURL: 'https://vr-chitech.firebaseio.com',
  projectId: 'vr-chitech',
  storageBucket: 'vr-chitech.appspot.com',
  messagingSenderId: '294689746221',
}

class Firebase {
  constructor() {
    app.initializeApp(config)
    this.auth = app.auth()

    this.googleProvider = new app.auth.GoogleAuthProvider()
    this.facebookProvider = new app.auth.FacebookAuthProvider()
  }

  doSignInWithGoogle = () => this.auth.signInWithPopup(this.googleProvider)

  doSignInWithFacebook = () => this.auth.signInWithPopup(this.facebookProvider)
}
export default Firebase
