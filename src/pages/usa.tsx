import CasesMapUsa from '../components/CasesMapUsa'
import Head from 'next/head'
import _getStaticProps from '../_getStaticProps'

export default () => (
  <>
    <Head>
      <title>Coronavirus | USA Interactive Map</title>
      <meta
        name="description"
        content="Confirmed cases of Coronavirus in the USA visualized on the map."
      />
    </Head>

    <CasesMapUsa />
  </>
)

export const getStaticProps = _getStaticProps
