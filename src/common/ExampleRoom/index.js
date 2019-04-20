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
      <Entity
        id="furniture"
        io3d-furniture="id:a2d91985-6d60-43ef-b660-0d6ed370bb6f"
        position="0 0 0"
        rotation=""
        scale=""
        visible=""
      />
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
        camera="fov: 55;"
        position="0 2 4.5"
        rotation="-15 0 0"
        scale=""
        visible=""
      />
    </Scene>
  </Wrapper>
)

export default ExampleRoom
