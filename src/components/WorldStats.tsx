import styled from 'styled-components'
import { BP, LOCALE } from '../constants'
import SectionLabel from './SectionLabel'

const CONFIRMED_CASES = 139620
const DEATHS = 5120
const RECOVERED = 70733

const WorldStats = () => (
  <>
    <SectionLabel>Global situation in numbers</SectionLabel>
    <Container>
      <div>
        <h3>CONFIRMED CASES</h3>
        <p>{CONFIRMED_CASES.toLocaleString(LOCALE)}</p>
      </div>

      <div>
        <h3>DEATHS</h3>
        <p>{DEATHS.toLocaleString(LOCALE)}</p>
      </div>

      <div>
        <h3>RECOVERED</h3>
        <p>{RECOVERED.toLocaleString(LOCALE)}</p>
      </div>
    </Container>
  </>
)

const Container = styled.div`
  display: flex;
  margin-bottom: 16px;

  > div {
    margin-right: 96px;

    > h3 {
      font-size: 18px;
      letter-spacing: 2px;
      color: #888;
      white-space: nowrap;
    }

    > p {
      font-size: 40px;
    }

    :last-child {
      margin-right: 0;
    }
  }

  @media (max-width: ${BP.MOBILE}) {
    flex-direction: column;
    margin-bottom: 0;

    > div {
      margin-top: 8px;
      margin-bottom: 16px;

      > h3 {
        font-size: 14px;
      }

      > p {
        font-size: 32px;
      }

      :last-child {
        margin-bottom: 2px;
      }
    }
  }
`

export default WorldStats
