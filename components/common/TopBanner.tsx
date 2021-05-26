import React from 'react'
import styled from 'styled-components'
import TranslatedSpan from '~components/shared/TranslatedSpan'
import COLOURS from '~styles/colours'

const TopBanner = () => {
  return (
    <Container>
      <div>
        <Span>TOP_BANNER_MESSAGE.FRONT</Span>
        <HighlightSpan>150€</HighlightSpan>
        <Span>TOP_BANNER_MESSAGE.BACK</Span>
      </div>
    </Container>
  )
}

export default TopBanner

const Container = styled.div`
  position: fixed;
  width: 100vw;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${COLOURS.LIGH_MAIN};
  box-shadow: 0px 0px 5px black;
  z-index: 100;
`

const Span = styled(TranslatedSpan)`
  font-size: 1rem;
  color: ${COLOURS.DARK_MAIN};
  text-transform: uppercase;
`

const HighlightSpan = styled(TranslatedSpan)`
  font-size: 1rem;
  font-weight: 550;
  color: red;
`
