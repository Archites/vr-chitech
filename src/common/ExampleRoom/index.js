import React from 'react'
import styled from 'styled-components'
import { Entity, Scene } from 'aframe-react'
import OnlyDesktop from 'common/OnlyDesktop'
import OnlyMobile from 'common/OnlyMobile'

const Wrapper = styled.div`
  height: 500px;
  border: 1px solid #c3c3c3;
`
const loadUrl = 'url(/src/common/ExampleRoom/room.glb)'
const ExampleRoom = () => (
  <Wrapper>
    <Scene
      embedded=""
      antialias="true"
      class=""
      inspector=""
      keyboard-shortcuts=""
      screenshot=""
      vr-mode-ui=""
    >
      <a-entity gltf-model={loadUrl} />
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
          position="9 9 9"
          rotation="-35 45 0"
          scale=""
          visible=""
        />
      </OnlyMobile>
    </Scene>
  </Wrapper>
)

export default ExampleRoom
