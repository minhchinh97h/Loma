import React from 'react'
import { AppProps } from 'next/app'
import '../styles/global.css'
import '../i18n/config'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
