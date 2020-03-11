import CasesMapWorld from '../components/CasesMapWorld'
import GlobalStats from '../components/GlobalStats'
import CasesMapUsa from '../components/CasesMapUsa'
import Head from 'next/head'

export default () => (
  <>
    <Head>
      <title>Coronavirus Visualized | Updated Maps and Numbers</title>
      <meta
        name="description"
        content="Latest Coronavirus stats visualized on interactive maps."
      ></meta>
    </Head>

    <GlobalStats />
    <CasesMapWorld />
    <CasesMapUsa />
  </>
)
