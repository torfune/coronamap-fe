import CasesMapUsa from '../components/CasesMapUsa'
import Head from 'next/head'
import _getStaticProps from '../_getStaticProps'
import { useGlobalContext } from '../GlobalContext'
import SectionLabel from '../components/SectionLabel'
import DataTable from '../components/DataTable'
import MapTableWrapper from '../components/MapTableWrapper'

export default () => {
  const { usaCases } = useGlobalContext()

  return (
    <>
      <Head>
        <title>Coronavirus | USA Interactive Map | Updated</title>
        <meta
          name="description"
          content="Confirmed cases of Coronavirus in the USA visualized on the map."
        />
      </Head>

      <SectionLabel>Global map of confirmed cases</SectionLabel>
      <MapTableWrapper>
        <DataTable data={usaCases} usa />
        <CasesMapUsa data={usaCases} />
      </MapTableWrapper>
    </>
  )
}

export const getStaticProps = _getStaticProps
