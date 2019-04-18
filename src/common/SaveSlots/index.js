import React from 'react'
import styled from 'styled-components'
import { FirstCard, SecondCard, ThirdCard, FourthCard } from '../Card/index'

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
    <FirstCard />
    <SecondCard />
    <ThirdCard />
    <FourthCard />
  </SlotWrapper>
)

export default SaveSlots
