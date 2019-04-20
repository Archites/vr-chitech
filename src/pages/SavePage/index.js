import React, { Component } from 'react'
import styled from 'styled-components'
import PageWrapper from 'common/PageWrapper'
import { withAuthorization } from 'common/Session'
import { paths } from 'common/constants'
import editImage from 'images/edit.png'
import trashImage from 'images/trash.png'
import plusImage from 'images/plus.png'
import defaultElement from './defaultElement'
import ConfirmModal from './confirm'

const Card = styled.button`
  position: relative;
  border: 1px solid rgba(0, 0, 0, 0.125);
  display: flex-box;
  margin: 5px;
  border-radius: 3px;
  box-shadow: 0 1px 0 rgba(9, 45, 66, 0.25);
  max-width: 300px;
  min-height: 80px;
  flex-grow: 1;
  flex: 1 1 30%;
  background-color: fff;
  outline: none;
`

const ClickState = styled.a`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  opacity: 0;
  top: 0;
  z-index: 1;
`

const ButtonContainer = styled.div`
  position: relative;
`

const EditButton = styled.img`
  position: absolute;
  z-index: 2;
  top: 0;
  right: 40px;
`
const DeleteButton = styled.img`
  position: absolute;
  z-index: 2;
  top: 0;
  right: 10px;
`

const Container = styled.div`
  padding: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

class SavePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
      isSelectName: '',
    }
  }

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

  editCard = () => {
    console.log('edit')
  }

  deleteCard = () => {
    console.log('delete')
  }

  toggleConfirm = (name = '') => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
      isSelectName: name,
    }))
  }

  render() {
    const { rooms, authUser } = this.props
    const { isOpen, isSelectName } = this.state

    return (
      rooms !== false && (
        <>
          <PageWrapper {...this.props}>
            <Container>
              {rooms.map(room => (
                <Card key={room.id}>
                  <ClickState
                    onClick={() => this.onClickOpenRoom(authUser.uid, room.id)}
                  />
                  <ButtonContainer>
                    <h1>{room.name}</h1>
                    <EditButton
                      onClick={this.editCard}
                      src={editImage}
                      type="button"
                    />
                    <DeleteButton
                      onClick={() => this.toggleConfirm(room.name)}
                      src={trashImage}
                      type="button"
                    />
                  </ButtonContainer>
                </Card>
              ))}
              <Card onClick={() => this.addRoom()} type="button">
                <img src={plusImage} />
              </Card>
            </Container>
            {isOpen && (
              <ConfirmModal name={isSelectName} toggle={this.toggleConfirm} />
            )}
          </PageWrapper>
        </>
      )
    )
  }
}

const condition = authUser => !!authUser
export default withAuthorization(condition)(SavePage)
