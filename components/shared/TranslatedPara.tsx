import React from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'

interface Props {
  children: string | { key: string; interpolatedValues: any }
  className?: string
}

const TranslatedPara = (props: Props) => {
  const { t } = useTranslation()

  if (typeof props.children === 'string') {
    return (
      <Container className={props.className}>{t(props.children)}</Container>
    )
  }

  return (
    <Container className={props.className}>
      {t(props.children.key, props.children.interpolatedValues)}
    </Container>
  )
}

const Container = styled.p``

export default TranslatedPara
