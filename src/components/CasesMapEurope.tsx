import SectionLabel from './SectionLabel'
import MapChart from './MapChart'
import { SOURCE } from '../constants'
import createDate from '../utils/createDate'
import { useGlobalContext } from '../GlobalContext'

const CasesMapEurope = () => {
  const { worldCases } = useGlobalContext()

  return (
    <>
      <SectionLabel>Map of confirmed cases in Europe</SectionLabel>
      <MapChart
        type="EUROPE"
        data={worldCases}
        source={`${SOURCE.WHO}, ${SOURCE.ECDC}`}
        updatedAt={createDate('12-03-20')}
      />
    </>
  )
}

export default CasesMapEurope
