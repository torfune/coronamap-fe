import _getStaticProps from '../_getStaticProps'
import CasesMapEurope from '../components/CasesMapEurope'
import MapTableWrapper from '../components/MapTableWrapper'
import DataTable from '../components/DataTable'
import SectionLabel from '../components/SectionLabel'
import { useGlobalContext } from '../GlobalContext'
import PageHead from '../components/PageHead'
import BarChart from '../components/BarChart'

export default () => {
  const { europeCases } = useGlobalContext()

  return (
    <>
      <PageHead
        title="Coronavirus | Europe Interactive Map | Updated"
        description="Confirmed cases of Coronavirus in Europe visualized on the interactive map"
      />

      <SectionLabel>Map of confirmed cases in Europe</SectionLabel>
      <MapTableWrapper>
        <DataTable data={europeCases} />
        <div>
          <CasesMapEurope data={europeCases} />
          <BarChart data={europeCases} />
        </div>
      </MapTableWrapper>
    </>
  )
}

export const getStaticProps = _getStaticProps
