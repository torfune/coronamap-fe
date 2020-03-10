import styled from 'styled-components'
import { BP } from '../constants'

const Header = () => (
  <Container>
    <img src="logo.svg" />
    <h1>CoronaMap.app</h1>
  </Container>
)

const Container = styled.div`
  position: fixed;
  background: #000;
  padding: 20px 64px;
  width: 100%;
  display: flex;
  align-items: center;
  z-index: 10;
  opacity: 0.9;

  img {
    height: 40px;
  }

  h1 {
    margin-left: 16px;
    font-size: 24px;
    letter-spacing: 2px;
  }

  @media (max-width: ${BP.MOBILE}) {
    padding: 20px 24px;

    img {
      height: 32px;
    }

    h1 {
      margin-left: 12px;
    }
  }
`

export default Header
