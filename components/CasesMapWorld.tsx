import SectionLabel from './SectionLabel'
import MapChart from './MapChart'
import { SOURCE } from '../constants'
import createDate from '../utils/createDate'
import data from '../public/data/world/world-cases-11-03-20.json'

const CasesMapWorld = () => (
  <>
    <SectionLabel>Global map of confirmed cases</SectionLabel>
    <MapChart
      type="WORLD"
      data={data}
      source={SOURCE.WHO}
      updatedAt={createDate('11-03-20')}
    />
  </>
)

export default CasesMapWorld
