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
      signInFlow: 'popup',
      signInOptions: [
        app.auth.GoogleAuthProvider.PROVIDER_ID,
        app.auth.FacebookAuthProvider.PROVIDER_ID,
      ],
      callbacks: {
        signInSuccess: () => false,
      },
    }
    return uiConfig
  }

  doAuth = () => app.auth()
}
export default Firebase
