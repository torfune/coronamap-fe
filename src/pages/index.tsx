import CasesMapWorld from '../components/CasesMapWorld'
import WorldStats from '../components/WorldStats'
import CasesMapUsa from '../components/CasesMapUsa'
import Head from 'next/head'
import _getStaticProps from '../_getStaticProps'

export default () => (
  <>
    <Head>
      <title>Coronavirus Visualized | Updated Maps and Numbers</title>
      <meta
        name="description"
        content="Latest Coronavirus stats visualized on interactive maps."
      ></meta>
    </Head>

    <WorldStats />
    <CasesMapWorld />
    <CasesMapUsa />
  </>
)

export const getStaticProps = _getStaticProps
