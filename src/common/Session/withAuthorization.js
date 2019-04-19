import React from 'react'
import { withRouter } from 'react-router-dom'
import { compose } from 'recompose'

import { withFirebase } from '../Firebase'

const withAuthorization = condition => Component => {
  class WithAuthorization extends React.Component {
    constructor(props) {
      super(props)

      this.state = {
        authUser: false,
        rooms: false,
      }
    }

    componentDidMount() {
      const { firebase, history } = this.props
      this.listener = firebase.auth.onAuthStateChanged(authUser => {
        if (!condition(authUser)) {
          history.push('/login')
        } else {
          const ref = firebase.database.child(authUser.currentUser.uid)
          ref.on('value', snapshot => this.getDatabase(snapshot.val()))
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
      return <Component {...this.state} {...this.props} />
    }
  }

  return compose(
    withRouter,
    withFirebase,
  )(WithAuthorization)
}

export default withAuthorization
