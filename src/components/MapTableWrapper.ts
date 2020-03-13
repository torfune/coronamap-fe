import styled from 'styled-components'
import { BP } from '../constants'

const MapTableWrapper = styled.div`
  display: grid;
  grid-template-columns: 256px auto;
  grid-gap: 48px;

  @media (max-width: ${BP.TABLE}) {
    display: flex;
    flex-direction: column-reverse;
  }
`

export default MapTableWrapper
