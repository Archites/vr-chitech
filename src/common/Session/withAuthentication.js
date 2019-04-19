/* eslint-disable react/no-unused-state */
import React from 'react'

import AuthUserContext from './context'
import { withFirebase } from '../Firebase'

const withAuthentication = Component => {
  class WithAuthentication extends React.Component {
    constructor(props) {
      super(props)

      this.state = {
        authUser: false,
        rooms: false,
      }
    }

    componentDidMount() {
      const { firebase } = this.props
      this.listener = firebase.auth.onAuthStateChanged(authUser => {
        if (authUser) {
          this.setState({ authUser: authUser })
          const ref = firebase.database.child(firebase.auth.currentUser.uid)
          ref.on('value', snapshot => this.getDatabase(snapshot.val()))
        } else {
          this.setState({ authUser: null })
        }
      })
    }

    componentWillUnmount() {
      this.listener()
    }

    getDatabase = value => {
      const arrRooms = []

      Object.keys(value.room).forEach(key => {
        arrRooms.push({
          id: key,
          ...value.room[key],
        })
      })

      this.setState({
        rooms: arrRooms,
      })
    }

    render() {
      const authUser = this.state
      return (
        <AuthUserContext.Provider value={authUser}>
          <Component {...this.state} {...this.props} />
        </AuthUserContext.Provider>
      )
    }
  }

  return withFirebase(WithAuthentication)
}

export default withAuthentication
