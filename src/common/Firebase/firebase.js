import app from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'
import firebaseConfig from './config'
import defaultElement from './defaultElement'

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
    this.amountRoom = 0
    this.rooms = {}

    this.googleProvider = new app.auth.GoogleAuthProvider()
    this.facebookProvider = new app.auth.FacebookAuthProvider()
  }

  doSignInWithGoogle = () => this.auth.signInWithPopup(this.googleProvider)

  doSignInWithFacebook = () => this.auth.signInWithPopup(this.facebookProvider)

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password)

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password)

  doSignOut = () => this.auth.signOut()

  findOrCreateDatabase = () => {
    const currentDatabase = this.database.child(this.auth.currentUser.uid)
    currentDatabase.once('value', snapshot => {
      if (!snapshot.exists()) {
        currentDatabase.set({ amountRoom: 0 })
      } else {
        this.setAmountOfRoom(snapshot.val().amountRoom)
      }
    })
  }

  setAmountOfRoom = value => {
    this.amountRoom = value
  }

  addRoom = () => {
    const currentDatabase = this.database.child(this.auth.currentUser.uid)
    currentDatabase.child('amountRoom').once('value', snapshot => {
      currentDatabase
        .child('room')
        .push()
        .set({
          name: `room-${snapshot.val() + 1}`,
          element: defaultElement,
        })
        .then(() => this.getAllRoom())
      currentDatabase
        .child('amountRoom')
        .set(snapshot.val() + 1)
        .then(() => this.setAmountOfRoom(snapshot.val() + 1))
    })
  }

  getAllRoom = () => {
    if (this.auth.currentUser === null) return
    const currentDatabase = this.database.child(this.auth.currentUser.uid)
    currentDatabase.child('room').once('value', snapshot => {
      this.rooms = snapshot.val()
    })
  }
}
export default Firebase
