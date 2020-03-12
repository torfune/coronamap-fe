import CasesMapWorld from '../components/CasesMapWorld'
import Head from 'next/head'
import _getStaticProps from '../_getStaticProps'

export default () => (
  <>
    <Head>
      <title>Coronavirus | World Interactive Map</title>
      <meta
        name="description"
        content="All confirmed cases of Coronavirus visualized on the map."
      />
    </Head>

    <CasesMapWorld />
  </>
)

export const getStaticProps = _getStaticProps
