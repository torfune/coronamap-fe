import Header from '../components/Header'
import styled from 'styled-components'
import { BP } from '../constants'
import Footer from '../components/Footer'
import { AppProps } from 'next/app'
import GlobalContext from '../GlobalContext'

export default ({ Component, pageProps }: AppProps) => (
  <GlobalContext.Provider
    value={{
      worldCases: pageProps.worldCases,
      europeCases: pageProps.europeCases,
      usaCases: pageProps.usaCases,
    }}
  >
    <Header />

    <Content>
      <Component {...pageProps} />
    </Content>

    <Footer />
  </GlobalContext.Provider>
)

const Content = styled.div`
  padding: 48px 64px;
  min-height: 100vh;

  @media (max-width: ${BP.MOBILE}) {
    padding: 24px 24px;
  }
`
