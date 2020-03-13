import { Z_INDEX } from '../constants'
import styled from 'styled-components'

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: ${Z_INDEX.BACKDROP};
  background: #000;
  opacity: 0.6;
`

export default Backdrop
