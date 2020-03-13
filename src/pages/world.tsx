import CasesMapWorld from '../components/CasesMapWorld'
import _getStaticProps from '../_getStaticProps'
import SectionLabel from '../components/SectionLabel'
import { useGlobalContext } from '../GlobalContext'
import DataTable from '../components/DataTable'
import MapTableWrapper from '../components/MapTableWrapper'
import PageHead from '../components/PageHead'

export default () => {
  const { worldCases } = useGlobalContext()

  return (
    <>
      <PageHead
        title="Coronavirus | World Interactive Map | Updated"
        description="All confirmed cases of Coronavirus visualized on the interactive map"
      />

      <SectionLabel>Global map of confirmed cases</SectionLabel>
      <MapTableWrapper>
        <DataTable data={worldCases} />
        <CasesMapWorld data={worldCases} />
      </MapTableWrapper>
    </>
  )
}

export const getStaticProps = _getStaticProps
