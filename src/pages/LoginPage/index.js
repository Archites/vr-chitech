import React from 'react'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import { FirebaseContext } from '../../common/Firebase'

// // eslint-disable-next-line react/prefer-stateless-function
// export default class Login extends Component {
//   render() {
//     return (
//       <div style={{ position: 'fixed', width: '100px', height: '100px' }}>
//         <h1>My App</h1>
//         <p>Please sign-in:</p>
//         <FirebaseContext.Consumer>
//           {firebase => (
//             <StyledFirebaseAuth
//               uiConfig={firebase.doCreateUI()}
//               firebaseAuth={firebase.doAuth()}
//             />
//           )}
//         </FirebaseContext.Consumer>
//       </div>
//     )
//   }
// }

const styles = {
  transform: 'translate(-50%, -50%)',
  position: 'fixed',
  width: '400px',
  height: '700px',
  backgroundColor: 'white',
  border: '1px solid black',
  left: '50%',
  top: '50%',
}

const Login = ({ handlePopup }) => (
  <div style={styles}>
    <h1>My App</h1>
    <p>Please sign-in:</p>
    <FirebaseContext.Consumer>
      {firebase => (
        <StyledFirebaseAuth
          uiConfig={firebase.doCreateUI()}
          firebaseAuth={firebase.doAuth()}
        />
      )}
    </FirebaseContext.Consumer>
    <button type="button" onClick={() => handlePopup(false)}>
      Close Popup
    </button>
  </div>
)

export default Login
