import Head from 'next/head'
import _getStaticProps from '../_getStaticProps'
import CasesMapEurope from '../components/CasesMapEurope'
import MapTableWrapper from '../components/MapTableWrapper'
import DataTable from '../components/DataTable'
import SectionLabel from '../components/SectionLabel'
import { useGlobalContext } from '../GlobalContext'

export default () => {
  const { europeCases } = useGlobalContext()

  return (
    <>
      <Head>
        <title>Coronavirus | Europe Interactive Map | Updated</title>
        <meta
          name="description"
          content="Confirmed cases of Coronavirus in Europe visualized on the map."
        />
      </Head>

      <SectionLabel>Map of confirmed cases in Europe</SectionLabel>
      <MapTableWrapper>
        <DataTable data={europeCases} />
        <CasesMapEurope data={europeCases} />
      </MapTableWrapper>
    </>
  )
}

export const getStaticProps = _getStaticProps
