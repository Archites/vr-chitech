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
  position: fixed;
  width: 400px;
  height: 150px;
  background-color: #fff;
  left: 50%;
  top: 50%;
  text-align: center;
  border-radius: 5px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.4);
  z-index: 3;
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

class Confirm extends Component {
  onConfirm = () => {}

  render() {
    const { toggle, name } = this.props

    return (
      <ContainerWrapper>
        <Container>
          <Body>
            <Title>Do you want to delete {name} ?</Title>
            <Button type="button">Confirm</Button>
            <Button onClick={toggle} type="button">
              Cancel
            </Button>
          </Body>
        </Container>
      </ContainerWrapper>
    )
  }
}

export default Confirm
