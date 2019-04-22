import React from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'
import room1 from 'images/room1.png'
import room2 from 'images/room2.png'
import room3 from 'images/room3.png'

const Wrapper = styled.div`
  height: 500px;
  border: 1px solid #c3c3c3;
  position: relative;
  background-color: #edf2f4;
  outline: none;
`

const Img = styled.img`
  @media (max-width: 576px) {
    height: 285px;
  }
  @media (min-width: 577px) {
    height: 350px;
  }
  @media (min-width: 1024px) {
    height: 490px;
  }
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
`

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 4500,
}

const ExampleRoom = () => (
  <Slider {...settings}>
    <Wrapper>
      <Img src={room1} />
    </Wrapper>
    <Wrapper>
      <Img src={room2} />
    </Wrapper>
    <Wrapper>
      <Img src={room3} />
    </Wrapper>
  </Slider>
)

export default ExampleRoom
