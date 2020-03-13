import styled from 'styled-components'
import Link from 'next/link'
import { COLOR, BP, Z_INDEX } from '../constants'
import { useState, useEffect } from 'react'
import Burger from './Burger'
import { useRouter } from 'next/router'
import Backdrop from './Backdrop'

const Navigation = () => {
  const router = useRouter()
  const [opened, setOpened] = useState(false)

  useEffect(() => {
    setOpened(false)
  }, [router])

  return (
    <>
      <Burger onClick={() => setOpened(true)} />
      <Container opened={opened}>
        <CrossButton onClick={() => setOpened(false)}>
          <img src="/icons/cross.svg" />
        </CrossButton>

        <ul>
          <li className="mobile-only">
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/world">
              <a>World</a>
            </Link>
          </li>
          <li>
            <Link href="/europe">
              <a>Europe</a>
            </Link>
          </li>
          <li>
            <Link href="/usa">
              <a>USA</a>
            </Link>
          </li>
        </ul>
      </Container>

      {opened && <Backdrop onClick={() => setOpened(false)} />}
    </>
  )
}

const Container = styled.div<{ opened: boolean }>`
  ul {
    display: flex;
    align-items: center;
  }

  li {
    list-style: none;
    display: flex;
    align-items: center;
    margin-left: 32px;
    font-size: 18px;
  }

  a {
    color: #fff;
    text-decoration: none;

    :hover {
      color: ${COLOR.MAP_FILL[3]};
    }
  }

  .mobile-only {
    display: none;

    @media (max-width: ${BP.MOBILE}) {
      display: block;
    }
  }

  @media (max-width: ${BP.MOBILE}) {
    position: fixed;
    z-index: ${Z_INDEX.NAVIGATION};
    top: 0;
    width: 200px;
    height: 100vh;
    background: #fff;
    transition: 200ms;
    right: ${props => (props.opened ? 0 : '-200px')};
    padding-right: 24px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    ul {
      flex-direction: column;
      width: 100%;
    }

    li {
      width: 100%;
      margin-left: 0;
      display: block;
      text-align: right;
    }

    a {
      color: #222;
      text-decoration: none;
      padding: 8px 0;
      display: block;
      width: 100%;
    }
  }
`
const CrossButton = styled.div`
  @media (min-width: ${BP.MOBILE}) {
    display: none;
  }

  width: 64px;
  height: 58px;
  position: relative;
  right: -24px;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  > img {
    height: 18px;
    margin-right: 24px;
  }
`

export default Navigation
