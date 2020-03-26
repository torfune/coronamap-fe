import { FC, useContext } from 'react'
import styled from 'styled-components'
import { BP } from '../constants'
import GlobalContext from '../GlobalContext'

interface Props {
  source: string
}
const DataInfo: FC<Props> = ({ source }) => {
  const { summary } = useContext(GlobalContext)

  return (
    <Container>
      <p>Last updated: {summary.updatedAt}</p>
      <span>|</span>
      <p>Source: {source}</p>
    </Container>
  )
}

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
