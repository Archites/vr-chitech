import React from 'react'
import styled from 'styled-components'
import { Entity, Scene } from 'aframe-react'
import OnlyDesktop from 'common/OnlyDesktop'
import OnlyMobile from 'common/OnlyMobile'
// import Slider from 'react-slick'

const Wrapper = styled.div`
  height: 500px;
  border: 1px solid #c3c3c3;
  position: relative;
`

const Cover = styled.div`
  height: 500px;
  width: 100%;
  position: absolute;
  opacity: 0;
  top: 0;
`

const room1 = 'url(/src/common/ExampleRoom/room1.glb)'
// const room2 = 'url(/src/common/ExampleRoom/room2.glb)'

// const settings = {
//   dots: true,
//   infinite: true,
//   speed: 500,
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   arrows: false,
// }

const ExampleRoom = () => (
  <Wrapper>
    <Scene
      embedded=""
      antialias="true"
      class=""
      inspector=""
      keyboard-shortcuts=""
      screenshot=""
      vr-mode-ui="enabled: false"
    >
      <a-entity gltf-model={room1} />
      <Entity
        primitive="a-sky"
        color="#EDF2F4"
        position=""
        rotation=""
        scale=""
        visible=""
        material=""
        geometry=""
      />
      <OnlyDesktop>
        <Entity
          camera="fov: 50;"
          position="5 5 5"
          rotation="-35 45 0"
          scale=""
          visible=""
        />
      </OnlyDesktop>
      <OnlyMobile>
        <Entity
          camera="fov: 50;"
          position="8 8 8"
          rotation="-35 45 0"
          scale=""
          visible=""
        />
      </OnlyMobile>
    </Scene>
    <Cover />
  </Wrapper>
)

export default ExampleRoom
