import Header from '../components/Header'
import styled from 'styled-components'
import { BP, SENTRY_ID } from '../constants'
import Footer from '../components/Footer'
import { AppProps } from 'next/app'
import GlobalContext from '../GlobalContext'
import * as Sentry from '@sentry/browser'
import { useEffect } from 'react'

export default ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    if (window.location.host === 'coronamap.app') {
      Sentry.init({ dsn: SENTRY_ID })
      console.log('Sentry initialized')
    }
  }, [])

  return (
    <GlobalContext.Provider
      value={{
        worldCases: pageProps.worldCases,
        europeCases: pageProps.europeCases,
        usaCases: pageProps.usaCases,
        summary: pageProps.summary,
      }}
    >
      <Header />

      <Content>
        <Component {...pageProps} />
      </Content>

      <Footer />
    </GlobalContext.Provider>
  )
}

const Content = styled.div`
  padding: 48px 64px;
  min-height: 100vh;
  max-width: 1100px;
  margin: 0 auto;

  @media (max-width: ${BP.MOBILE}) {
    padding: 24px 24px;
  }
`
