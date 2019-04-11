import React from 'react'
import styled from 'styled-components'
import Card from 'common/Card'
import { paths } from 'common/constants'

const SlotWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  justify-content: space-around;
  margin: 16px;
  grid-gap: 16px;
`

const SaveSlots = () => (
  <SlotWrapper>
    <Card path={paths.room_one} />
    <Card path={paths.room_one} />
    <Card path={paths.room_one} />
    <Card path={paths.room_one} />
  </SlotWrapper>
)

export default SaveSlots
