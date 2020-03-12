import styled from 'styled-components'
import { COLOR, BP } from '../constants'
import { FC } from 'react'

interface Props {
  breakpoints: number[]
}
const MapLegend: FC<Props> = ({ breakpoints }) => (
  <Container>
    <LegendItem color={COLOR.MAP_FILL[0]}>
      <div />
      <p>&lt;{breakpoints[0]}</p>
    </LegendItem>
    {breakpoints.map((value, index) => (
      <LegendItem key={index} color={COLOR.MAP_FILL[index + 1]}>
        <div />
        <p>{value.toLocaleString()}+</p>
      </LegendItem>
    ))}
  </Container>
)

const Container = styled.div`
  display: flex;
`
const LegendItem = styled.div<{ color: string }>`
  display: flex;
  align-items: center;
  margin-left: 32px;

  div {
    border-radius: 50%;
    width: 16px;
    height: 16px;
    background: ${props => props.color};
  }

  p {
    margin-left: 8px;
  }

  @media (max-width: ${BP.MOBILE}) {
    font-size: 12px;
    margin-left: 0;
    margin-right: 16px;

    div {
      width: 12px;
      height: 12px;
    }

    p {
      margin-left: 6px;
    }
  }
`

export default MapLegend
