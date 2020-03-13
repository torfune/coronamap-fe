import { FC } from 'react'
import styled from 'styled-components'
import { BP, LOCALE } from '../constants'

interface Props {
  source: string
  updatedAt: Date
}
const DataInfo: FC<Props> = ({ source, updatedAt }) => (
  <Container>
    <p>Updated: {updatedAt.toLocaleDateString(LOCALE)}</p>
    <span>|</span>
    <p>Source: {source}</p>
  </Container>
)

const Container = styled.div`
  display: flex;
  align-items: center;
  color: #666;
  font-size: 12px;

  span {
    margin-left: 8px;
    margin-right: 8px;
  }

  @media (max-width: ${BP.MOBILE}) {
    flex-direction: column-reverse;
    align-items: flex-start;
    margin-top: 12px;

    span {
      display: none;
    }
  }
`

export default DataInfo
