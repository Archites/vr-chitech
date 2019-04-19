import React from 'react'
import { withRouter } from 'react-router-dom'
import { compose } from 'recompose'

import { paths } from 'common/constants'
import { withFirebase } from '../Firebase'

const withAuthorization = condition => Component => {
  class WithAuthorization extends React.Component {
    constructor(props) {
      super(props)

      this.state = {
        authUser: false,
        rooms: false,
        element: false,
      }
    }

    componentDidMount() {
      const { firebase, history, location } = this.props
      this.listener = firebase.auth.onAuthStateChanged(authUser => {
        if (!condition(authUser)) {
          history.push(paths.login)
        } else {
          const ref = firebase.database.child(authUser.uid)
          ref.on('value', snapshot =>
            this.getDatabase(snapshot.val(), authUser),
          )
          if (location.state) {
            ref
              .child('room')
              .child(location.state.id)
              .child('element')
              .on('value', snapshot => this.getElement(snapshot.val()))
          }
        }
      })
    }

    componentWillUnmount() {
      this.listener()
    }

    getDatabase = (value, authUser) => {
      const arrRooms = []

      Object.keys(value.room).forEach(key => {
        arrRooms.push({
          id: key,
          ...value.room[key],
        })
      })

      this.setState({
        rooms: arrRooms,
        authUser: authUser,
      })
    }

    getElement = value => {
      this.setState({
        element: value,
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
