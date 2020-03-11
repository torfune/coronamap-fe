import styled from 'styled-components'
import { BP } from '../constants'

const SectionLabel = styled.h3`
  font-size: 18px;
  margin-bottom: 24px;
  margin-top: 80px;

  @media (max-width: ${BP.MOBILE}) {
    font-size: 16px;
    margin-bottom: 16px;
  }
`

export default SectionLabel
