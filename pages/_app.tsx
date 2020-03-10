import Header from '../components/Header'
import styled from 'styled-components'
import { BP } from '../constants'
import Footer from '../components/Footer'

const App = ({ Component, pageProps }: any) => (
  <>
    <Header />

    <Content>
      <Component {...pageProps} />
    </Content>

    <Footer />
  </>
)

const Content = styled.div`
  padding: 48px 64px;
  min-height: 100vh;

  @media (max-width: ${BP.MOBILE}) {
    padding: 24px 24px;
  }
`

export default App
