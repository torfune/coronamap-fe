import styled from 'styled-components'
import DataInfo from './DataInfo'
import CountUp from 'react-countup'
import { BP, SOURCE } from '../constants'
import SectionLabel from './SectionLabel'

const GlobalStats = () => (
  <>
    <SectionLabel>Global situation in numbers</SectionLabel>
    <Container>
      <div>
        <h3>CONFIRMED CASES</h3>
        <CountUp end={113702} duration={1} separator="," delay={0}>
          {({ countUpRef }) => <p ref={countUpRef} />}
        </CountUp>
      </div>

      <div>
        <h3>DEATHS</h3>
        <CountUp end={4012} duration={1} separator="," delay={0}>
          {({ countUpRef }) => <p ref={countUpRef} />}
        </CountUp>
      </div>

      <div>
        <h3>RECOVERED</h3>
        <CountUp end={65105} duration={1} separator="," delay={0}>
          {({ countUpRef }) => <p ref={countUpRef} />}
        </CountUp>
      </div>
    </Container>
    <DataInfo source={SOURCE.WHO} updatedAt={new Date(2020, 2, 10)} />
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

export default GlobalStats
