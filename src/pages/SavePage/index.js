import React, { Component } from 'react'
import styled from 'styled-components'
import PageWrapper from 'common/PageWrapper'
import { withAuthorization } from 'common/Session'
import { paths } from 'common/constants'
import defaultElement from './defaultElement'

const Card = styled.div``

class SavePage extends Component {
  componentDidMount() {
    document.documentElement.classList.remove('a-html')
    document.body.classList.remove('a-body')
    if (document.querySelector('a.toggle-edit') !== null) {
      const elem = document.querySelector('a.toggle-edit')
      elem.parentNode.removeChild(elem)
    }
  }

  onClickOpenRoom = (uId, roomId) => {
    const { history } = this.props
    history.push({
      pathname: paths.room,
      state: {
        uId: uId,
        roomId: roomId,
      },
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
    const { rooms, authUser } = this.props

    return (
      rooms !== false && (
        <>
          <PageWrapper {...this.props}>
            {rooms.map(room => (
              <Card
                key={room.id}
                onClick={() => this.onClickOpenRoom(authUser.uid, room.id)}
              >
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

const condition = authUser => !!authUser
export default withAuthorization(condition)(SavePage)
