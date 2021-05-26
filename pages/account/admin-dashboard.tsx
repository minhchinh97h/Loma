import { GetStaticProps, GetStaticPropsContext } from 'next'
import React from 'react'

interface Props {}

const AdminDashboard = (props: Props) => {
  return <div></div>
}

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  return {
    props: {}
  }
}

export default AdminDashboard
