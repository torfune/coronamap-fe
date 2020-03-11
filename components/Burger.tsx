import styled from 'styled-components'
import { FC } from 'react'
import { BP } from '../constants'

interface Props {
  onClick: () => void
}
const Burger: FC<Props> = ({ onClick }) => (
  <Container onClick={onClick}>
    <div>
      <span />
      <span />
      <span />
    </div>
  </Container>
)

const Container = styled.div`
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

  > div {
    margin-right: 24px;
    width: 24px;
    height: 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  > div > span {
    display: block;
    width: 100%;
    background: #fff;
    border-radius: 4px;
    height: 2px;
  }
`

export default Burger
