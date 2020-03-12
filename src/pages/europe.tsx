import Head from 'next/head'
import _getStaticProps from '../_getStaticProps'
import CasesMapEurope from '../components/CasesMapEurope'

export default () => (
  <>
    <Head>
      <title>Coronavirus | Europe Interactive Map</title>
      <meta
        name="description"
        content="Confirmed cases of Coronavirus in Europe visualized on the map."
      />
    </Head>

    <CasesMapEurope />
  </>
)

export const getStaticProps = _getStaticProps
