import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Wrapper = styled(Link)`
  height: 500px;
  border: 1px solid #c3c3c3;
  padding: 8px;
`

const Card = ({ path }) => <Wrapper to={path}>Link</Wrapper>

export default Card
