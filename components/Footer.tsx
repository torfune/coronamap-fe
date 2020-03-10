import styled from 'styled-components'
import Link from 'next/link'

const Footer = () => (
  <Container>
    <p>CoronaMap.app ©️ 2020</p>
    <p>
      Created by Matej Strnad
      <br />
      matejstrnad@icloud.com
    </p>

    <Link href="/privacy-policy">
      <a>Privacy policy</a>
    </Link>
  </Container>
)

const Container = styled.div`
  background: #111;
  padding: 96px 0;
  text-align: center;
  margin-top: 128px;
  color: #ccc;

  p {
    margin: 32px 0;
  }

  a {
    color: #ccc;
  }
`

export default Footer
