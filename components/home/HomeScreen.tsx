import React from 'react'
import styled from 'styled-components'
import Layout from '~components/common/Layout'
import TopBanner from '~components/common/TopBanner'

const HomeScreen = () => {
  return (
    <Container>
      <TopBanner />
      <Layout></Layout>
    </Container>
  )
}

export default HomeScreen

const Container = styled.div`
  position: relative;
`
