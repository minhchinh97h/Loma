import React from 'react'
import styled from 'styled-components'

interface Props {
  children: React.ReactNode
}

const Layout = (props: Props) => {
  return (
    <Container>
      <MainContainer>
        <InnerContainer>{props.children}</InnerContainer>
      </MainContainer>
    </Container>
  )
}

export default Layout

const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  padding-top: 3rem;
  z-index: 1;
`

const MainContainer = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
`

const InnerContainer = styled.div`
  @media only screen and (min-width: 980px) {
    max-width: 50rem;
  }
  width: 100%;
  height: 30rem;
  background-color: pink;
`
