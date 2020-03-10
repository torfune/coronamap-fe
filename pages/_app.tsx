import Header from '../components/Header'
import styled from 'styled-components'
import { BP } from '../constants'

const App = ({ Component, pageProps }: any) => (
  <>
    <Header />
    <Content>
      <Component {...pageProps} />
    </Content>
  </>
)

const Content = styled.div`
  padding: 48px 64px;
  min-height: 2000px;

  @media (max-width: ${BP.MOBILE}) {
    padding: 24px 24px;
  }
`

export default App
