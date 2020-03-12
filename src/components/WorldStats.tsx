import styled from 'styled-components'
import { BP } from '../constants'
import SectionLabel from './SectionLabel'

const CONFIRMED_CASES = 134087
const DEATHS = 4964
const RECOVERED = 68898

const WorldStats = () => (
  <>
    <SectionLabel>Global situation in numbers</SectionLabel>
    <Container>
      <div>
        <h3>CONFIRMED CASES</h3>
        <p>{CONFIRMED_CASES.toLocaleString()}</p>
      </div>

      <div>
        <h3>DEATHS</h3>
        <p>{DEATHS.toLocaleString()}</p>
      </div>

      <div>
        <h3>RECOVERED</h3>
        <p>{RECOVERED.toLocaleString()}</p>
      </div>
    </Container>
  </>
)

const Container = styled.div`
  display: flex;
  margin-bottom: 16px;

  div {
    margin-right: 96px;

    h3 {
      font-size: 18px;
      letter-spacing: 2px;
      color: #888;
    }

    p {
      font-size: 40px;
    }
  }

  @media (max-width: ${BP.MOBILE}) {
    flex-direction: column;
    margin-bottom: 0;

    div {
      margin-top: 8px;
      margin-bottom: 16px;

      h3 {
        font-size: 16px;
      }

      p {
        font-size: 32px;
      }

      :last-child {
        margin-bottom: 2px;
      }
    }
  }
`

export default WorldStats
