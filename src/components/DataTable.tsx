import { FC } from 'react'
import Data from '../types/Data'
import styled from 'styled-components'
import getCountryName from '../utils/getCountryName'
import getStateName from '../utils/getStateName'
import { LOCALE, BP } from '../constants'

interface Props {
  data: Data
  usa?: boolean
}
const DataTable: FC<Props> = ({ data, usa }) => {
  const array = Object.entries(data)
    .map(([code, value]) => ({
      label: usa ? getStateName(code) : getCountryName(code),
      value,
    }))
    .sort((a, b) => b.value - a.value)

  return (
    <Container>
      <tbody>
        {array.map(row => (
          <tr key={row.label}>
            <td>{row.label}</td>
            <td>{row.value.toLocaleString(LOCALE)}</td>
          </tr>
        ))}
      </tbody>
    </Container>
  )
}

const Container = styled.table`
  border-collapse: collapse;

  > tbody > tr {
    > td {
      border-top: 1px solid #222;
      padding: 6px 0;
    }

    :last-child > td {
      border-bottom: 1px solid #222;
    }
  }

  td:last-child {
    text-align: right;
  }

  @media (max-width: ${BP.TABLE}) {
    width: 100%;
  }
`

export default DataTable
