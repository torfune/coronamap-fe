import CasesMapWorld from '../components/CasesMapWorld'
import WorldStats from '../components/WorldStats'
import CasesMapUsa from '../components/CasesMapUsa'
import Head from 'next/head'
import _getStaticProps from '../_getStaticProps'
import CasesMapEurope from '../components/CasesMapEurope'
import { useGlobalContext } from '../GlobalContext'
import SectionLabel from '../components/SectionLabel'

export default () => {
  const { worldCases, europeCases, usaCases } = useGlobalContext()

  return (
    <>
      <Head>
        <title>Coronavirus Visualized | Updated Maps and Numbers</title>
        <meta
          name="description"
          content="Latest Coronavirus stats visualized on interactive maps."
        ></meta>
      </Head>

      <WorldStats />

      <SectionLabel>Global map of confirmed cases</SectionLabel>
      <CasesMapWorld data={worldCases} />

      <SectionLabel>Map of confirmed cases in the USA</SectionLabel>
      <CasesMapUsa data={usaCases} />

      <SectionLabel>Map of confirmed cases in Europe</SectionLabel>
      <CasesMapEurope data={europeCases} />
    </>
  )
}

export const getStaticProps = _getStaticProps
