import SectionLabel from './SectionLabel'
import MapChart from './MapChart'
import { SOURCE } from '../constants'
import createDate from '../utils/createDate'
import { useGlobalContext } from '../GlobalContext'

const CasesMapWorld = () => {
  const { worldCases } = useGlobalContext()

  return (
    <>
      <SectionLabel>Global map of confirmed cases</SectionLabel>
      <MapChart
        type="WORLD"
        data={worldCases}
        source={SOURCE.WHO}
        updatedAt={createDate('12-03-20')}
      />
    </>
  )
}

export default CasesMapWorld
