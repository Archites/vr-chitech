import app from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'
import { paths } from 'common/constants'
import firebaseConfig from './config'

const config = {
  apiKey: firebaseConfig.apiKey,
  authDomain: firebaseConfig.authDomain,
  databaseURL: firebaseConfig.databaseURL,
  projectId: firebaseConfig.projectId,
  storageBucket: firebaseConfig.storageBucket,
  messagingSenderId: firebaseConfig.messagingSenderId,
}

class Firebase {
  constructor() {
    app.initializeApp(config)
    this.auth = app.auth()
    this.database = app.database().ref()

    this.googleProvider = new app.auth.GoogleAuthProvider()
    this.facebookProvider = new app.auth.FacebookAuthProvider()
  }

  doSignInWithGoogle = () => this.auth.signInWithPopup(this.googleProvider)

  doSignInWithFacebook = () => this.auth.signInWithPopup(this.facebookProvider)

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password)

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password)

  doSignOut = history => {
    this.auth.signOut()
    history.push(paths.landing)
  }

  findOrCreateDatabase = () => {
    const currentDatabase = this.database.child(this.auth.currentUser.uid)
    currentDatabase.once('value', snapshot => {
      if (!snapshot.exists()) {
        currentDatabase.set({ amountRoom: 0 })
      }
    })
  }
}
export default Firebase
