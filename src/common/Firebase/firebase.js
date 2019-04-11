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
  }

  doCreateUI = () => {
    const uiConfig = {
      // Popup signin flow rather than redirect flow.
      signInFlow: 'popup',
      // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
      signInSuccessUrl: '/signedIn',
      // We will display Google and Facebook as auth providers.
      signInOptions: [
        app.auth.GoogleAuthProvider.PROVIDER_ID,
        app.auth.FacebookAuthProvider.PROVIDER_ID,
      ],
    }
    return uiConfig
  }

  doAuth = () => app.auth()
}
export default Firebase
