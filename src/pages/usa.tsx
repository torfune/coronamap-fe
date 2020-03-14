import CasesMapUsa from '../components/CasesMapUsa'
import _getStaticProps from '../_getStaticProps'
import { useGlobalContext } from '../GlobalContext'
import SectionLabel from '../components/SectionLabel'
import DataTable from '../components/DataTable'
import MapTableWrapper from '../components/MapTableWrapper'
import PageHead from '../components/PageHead'
import BarChart from '../components/BarChart'

export default () => {
  const { usaCases } = useGlobalContext()

  return (
    <>
      <PageHead
        title="Coronavirus | USA Interactive Map | Updated"
        description="Confirmed cases of Coronavirus in the USA visualized on the interactive map"
      />

      <SectionLabel>Global map of confirmed cases</SectionLabel>
      <MapTableWrapper>
        <DataTable data={usaCases} usa />
        <div>
          <CasesMapUsa data={usaCases} />
          <BarChart data={usaCases} usa />
        </div>
      </MapTableWrapper>
    </>
  )
}

export const getStaticProps = _getStaticProps
