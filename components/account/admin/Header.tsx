import React from 'react'
import styled from 'styled-components'
import TranslatedPara from '~components/shared/TranslatedPara'

const Header = () => {
  return (
    <Container>
      <Text>Hello</Text>
    </Container>
  )
}

export default Header

const Container = styled.div`
  width: 100vw;
  height: 2rem;
  background-color: black;
`

const Text = styled(TranslatedPara)``
