import CasesMapWorld from '../components/CasesMapWorld'
import Head from 'next/head'

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
