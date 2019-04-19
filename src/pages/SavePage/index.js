import React, { Component } from 'react'
import styled from 'styled-components'
import PageWrapper from 'common/PageWrapper'
import { withAuthentication } from 'common/Session'
import defaultElement from './defaultElement'

const Card = styled.div``

class SavePage extends Component {
  onClickOpenRoom = id => {
    const { history } = this.props
    history.push({
      pathname: '/room',
      state: { id: id },
    })
  }

  addRoom = () => {
    const { firebase } = this.props
    const ref = firebase.database.child(firebase.auth.currentUser.uid)
    ref.child('amountRoom').once('value', snapshot => {
      ref
        .child('room')
        .push()
        .set({
          name: `room-${snapshot.val() + 1}`,
          element: defaultElement,
        })
      ref.child('amountRoom').set(snapshot.val() + 1)
    })
  }

  render() {
    const { authUser, rooms } = this.props

    return (
      authUser !== false &&
      rooms !== false && (
        <>
          <PageWrapper {...this.props}>
            {rooms.map(room => (
              <Card key={room.id} onClick={() => this.onClickOpenRoom(room.id)}>
                {room.name}
              </Card>
            ))}
            <button onClick={() => this.addRoom()} type="button">
              +
            </button>
          </PageWrapper>
        </>
      )
    )
  }
}

export default withAuthentication(SavePage)
