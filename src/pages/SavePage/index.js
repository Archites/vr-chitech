import React, { Component } from 'react'
import styled from 'styled-components'
import PageWrapper from 'common/PageWrapper'
import { withAuthentication } from 'common/Session'

const Card = styled.div``

class SavePage extends Component {
  constructor(props) {
    super(props)
    const { firebase } = this.props
    this.state = {
      saveStates: [],
    }

    firebase.getAllRoom()
  }

  componentDidMount() {
    const { firebase } = this.props

    const arrRooms = []

    Object.keys(firebase.rooms).forEach(key => {
      arrRooms.push({
        id: key,
        ...firebase.rooms[key],
      })
    })

    console.log(arrRooms)

    this.setState({
      saveStates: arrRooms,
    })
  }

  onClickOpenRoom = id => {
    const { history } = this.props
    history.push({
      pathname: '/room',
      state: { id: id },
    })
  }

  render() {
    const { authUser, firebase } = this.props
    const { saveStates } = this.state

    return (
      authUser !== false && (
        <>
          <PageWrapper {...this.props}>
            {saveStates.map(state => (
              <Card
                key={state.id}
                onClick={() => this.onClickOpenRoom(state.id)}
              >
                {state.name}
              </Card>
            ))}
            {console.log(saveStates)}
            <button onClick={() => firebase.addRoom()} type="button">
              +
            </button>
          </PageWrapper>
        </>
      )
    )
  }
}

export default withAuthentication(SavePage)
