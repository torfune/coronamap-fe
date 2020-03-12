import SectionLabel from './SectionLabel'
import MapChart from './MapChart'
import { SOURCE } from '../constants'
import createDate from '../utils/createDate'
import worldData from '../public/data/world/world-cases-11-03-20.json'
import euData from '../public/data/eu/eu-cases-12-03-20_08-00.json'
import Data from '../types/Data'

const data: Data = { ...worldData }
const entries = Object.entries(euData)
for (let i = 0; i < entries.length; i++) {
  const [code, value] = entries[i]
  if (!data[code] || value > data[code]) {
    data[code] = value
  }
}

const CasesMapWorld = () => (
  <>
    <SectionLabel>Global map of confirmed cases</SectionLabel>
    <MapChart
      type="WORLD"
      data={data}
      source={SOURCE.WHO}
      updatedAt={createDate('12-03-20')}
    />
  </>
)

export default CasesMapWorld
