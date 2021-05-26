import {
  GetStaticPaths,
  GetStaticPathsContext,
  GetStaticProps,
  GetStaticPropsContext
} from 'next'
import React from 'react'

interface Props {}

const AccountId = (props: Props) => {
  console.log('props', props)
  return <div></div>
}

export const getStaticPaths: GetStaticPaths = async (
  context: GetStaticPathsContext
) => {
  console.log('getStaticPaths context', context)

  return {
    paths: [
      {
        params: {
          id: '1'
        }
      }
    ],
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  console.log('getStaticProps context', context)
  return {
    props: {}
  }
}

export default AccountId
