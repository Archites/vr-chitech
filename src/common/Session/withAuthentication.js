/* eslint-disable react/no-unused-state */
import React from 'react'

import AuthUserContext from './context'
import { withFirebase } from '../Firebase'

const withAuthentication = Component => {
  class WithAuthentication extends React.Component {
    constructor(props) {
      super(props)

      this.state = {
        authUser: null,
      }
    }

    componentDidMount() {
      const { firebase } = this.props
      this.listener = firebase.auth.onAuthStateChanged(authUser => {
        authUser
          ? this.setState({ authUser })
          : this.setState({ authUser: null })
      })
    }

    componentWillUnmount() {
      this.listener()
    }

    render() {
      const authUser = this.state
      return (
        authUser && (
          <AuthUserContext.Provider value={authUser}>
            <Component authUser {...this.props} />
          </AuthUserContext.Provider>
        )
      )
    }
  }

  return withFirebase(WithAuthentication)
}

export default withAuthentication
