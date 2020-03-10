import styled from 'styled-components'
import DataInfo from './DataInfo'
import CountUp from 'react-countup'
import { BP } from '../constants'

const Stats = () => (
  <>
    <Container>
      <div>
        <h4>TOTAL CASES</h4>
        <CountUp end={105586} duration={1} separator="," delay={0}>
          {({ countUpRef }) => <p ref={countUpRef} />}
        </CountUp>
      </div>

      <div>
        <h4>DEATHS</h4>
        <CountUp end={3584} duration={1} separator="," delay={0}>
          {({ countUpRef }) => <p ref={countUpRef} />}
        </CountUp>
      </div>

      <div>
        <h4>RECOVERED</h4>
        <CountUp end={64750} duration={1} separator="," delay={0}>
          {({ countUpRef }) => <p ref={countUpRef} />}
        </CountUp>
      </div>
    </Container>
    <DataInfo updatedAt={new Date(2020, 2, 8)} />
  </>
)

const Container = styled.div`
  display: flex;
  margin-bottom: 16px;

  div {
    margin-right: 96px;

    h4 {
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

      h4 {
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

export default Stats
