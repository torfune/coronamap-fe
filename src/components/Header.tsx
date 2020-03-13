import styled from 'styled-components'
import { BP } from '../constants'
import Link from 'next/link'
import Navigation from './Navigation'

const Header = () => (
  <Container>
    <Link href="/">
      <a>
        <img src="icons/logo.svg" />
        <h1>Coronavirus Interactive Map</h1>
      </a>
    </Link>

    <Navigation />
  </Container>
)

const Container = styled.div`
  position: fixed;
  background: #000;
  padding: 20px 64px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 10;
  opacity: 0.9;

  > a {
    display: flex;
    text-decoration: none;
    align-items: center;
    color: #fff;
  }

  > a > img {
    height: 40px;
  }

  > a > h1 {
    margin-left: 16px;
    font-size: 24px;
    letter-spacing: 2px;
  }

  @media (max-width: ${BP.MOBILE}) {
    height: 58px;
    padding: 0 24px;
    opacity: 0.94;

    > a > img {
      height: 24px;
    }

    > a > h1 {
      margin-left: 12px;
      font-size: 20px;
    }
  }
`

export default Header
