import { FC } from 'react'
import Data from '../types/Data'
import styled from 'styled-components'
import getName from '../utils/getName'
import { LOCALE, BP } from '../constants'
import countries from '../constants/countries'
import states from '../constants/states'

interface Props {
  data: Data
  usa?: boolean
}
const DataTable: FC<Props> = ({ data, usa }) => {
  const array = Object.entries(data)
    .map(([code, value]) => ({
      label: usa ? getName(code, states) : getName(code, countries),
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
