import React, { Component } from 'react'
import styled from 'styled-components'

const ContainerWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 3;
  background-color: rgba(0, 0, 0, 0.4);
`

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`

const Body = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  width: 400px;
  height: 180px;
  background-color: #fff;
  left: 50%;
  top: 50%;
  text-align: center;
  border-radius: 5px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.9);
  z-index: 3;
  padding: 16px;
`

const Title = styled.h1`
  color: #333;
  font-weight: 100;
  color: #8a8a8a;
`

const Button = styled.button`
  outline: none;
  transition: background-color 0.2s;
  background-color: transparent;
  color: #8a8a8a;
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  border: 1px solid #8a8a8a;
  user-select: none;
  display: inline-block;
  margin: 0 10px;

  &:hover {
    color: #fafafa;
    background-color: #8a8a8a;
  }
  &:active,
  &:focus {
    color: #fafafa;
    background-color: #a0a0a0;
  }
`

const Input = styled.input`
  display: block;
  margin: 20px auto;
  border-width: 0 0 4px 0;
  text-align: center;
  color: #8a8a8a;
  font-size: 25px;
  padding: 3px 30px;

  &:focus {
    outline: none;
  }
`

export class ModalEdit extends Component {
  constructor(props) {
    super(props)

    const { name } = this.props

    this.state = {
      value: name,
    }
  }

  componentDidMount = () => {
    document.addEventListener('keydown', this.keyFunction, false)
  }

  componentWillUnmount = () => {
    document.removeEventListener('keydown', this.keyFunction, false)
  }

  keyFunction = event => {
    const { toggle, editRoom } = this.props
    const { value } = this.state

    if (event.keyCode === 27) {
      toggle()
    } else if (event.keyCode === 13) {
      editRoom(value)
    }
  }

  handleChange = ({ target: { value } }) => {
    this.setState(state => (value.length <= 16 ? { value } : state))
  }

  render() {
    const { value } = this.state
    const { toggle, editRoom } = this.props

    return (
      <ContainerWrapper>
        <Container>
          <Body>
            <Input value={value} onChange={this.handleChange} />
            <Button onClick={() => editRoom(value)} type="button">
              Confirm
            </Button>
            <Button onClick={toggle} type="button">
              Cancel
            </Button>
          </Body>
        </Container>
      </ContainerWrapper>
    )
  }
}

export class ModalDelete extends Component {
  componentDidMount = () => {
    document.addEventListener('keydown', this.keyFunction, false)
  }

  componentWillUnmount = () => {
    document.removeEventListener('keydown', this.keyFunction, false)
  }

  keyFunction = event => {
    const { toggle, removeRoom } = this.props

    if (event.keyCode === 27) {
      toggle()
    } else if (event.keyCode === 13) {
      removeRoom()
    }
  }

  render() {
    const { toggle, name, removeRoom } = this.props

    return (
      <ContainerWrapper>
        <Container>
          <Body>
            <Title>Do you want to delete {name} ?</Title>
            <Button onClick={removeRoom} type="button">
              Confirm
            </Button>
            <Button onClick={toggle} type="button">
              Cancel
            </Button>
          </Body>
        </Container>
      </ContainerWrapper>
    )
  }
}
