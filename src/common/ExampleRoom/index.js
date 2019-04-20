import React from 'react'
import styled from 'styled-components'
import { Entity, Scene } from 'aframe-react'

const Wrapper = styled.div`
  height: 500px;
  border: 1px solid #c3c3c3;
`

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
      <a-entity gltf-model="url(/src/common/ExampleRoom/tiny-room.glb)" />
      <Entity
        primitive="a-sky"
        color="#ececec"
        position=""
        rotation=""
        scale=""
        visible=""
        material=""
        geometry=""
      />
      <Entity
        geometry="primitive: circle; radius: 2"
        material="color: #999;"
        position="0 0 0"
        rotation="-90 0 0"
        scale=""
        visible=""
      />
      <Entity
        camera="fov: 50;"
        position="5 4.5 5"
        rotation="-30 45 0"
        scale=""
        visible=""
      />
    </Scene>
  </Wrapper>
)

export default ExampleRoom
