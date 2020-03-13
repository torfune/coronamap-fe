import CasesMapWorld from '../components/CasesMapWorld'
import Head from 'next/head'
import _getStaticProps from '../_getStaticProps'
import SectionLabel from '../components/SectionLabel'
import { useGlobalContext } from '../GlobalContext'
import DataTable from '../components/DataTable'
import MapTableWrapper from '../components/MapTableWrapper'

export default () => {
  const { worldCases } = useGlobalContext()

  return (
    <>
      <Head>
        <title>Coronavirus | World Interactive Map</title>
        <meta
          name="description"
          content="All confirmed cases of Coronavirus visualized on the map."
        />
      </Head>

      <SectionLabel>Global map of confirmed cases</SectionLabel>
      <MapTableWrapper>
        <DataTable data={worldCases} />
        <CasesMapWorld data={worldCases} />
      </MapTableWrapper>
    </>
  )
}

export const getStaticProps = _getStaticProps
