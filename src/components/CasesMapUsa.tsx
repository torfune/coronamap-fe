import SectionLabel from './SectionLabel'
import MapChart from './MapChart'
import { SOURCE } from '../constants'
import createDate from '../utils/createDate'
import data from '../data/cnn/usa-cases-13-03-20.json'

const CasesMapUsa = () => (
  <>
    <SectionLabel>Map of confirmed cases in the USA</SectionLabel>
    <MapChart
      type="USA"
      data={data}
      source={`${SOURCE.CDC}, ${SOURCE.CNN}`}
      updatedAt={createDate('13-03-20')}
    />
  </>
)

export default CasesMapUsa
