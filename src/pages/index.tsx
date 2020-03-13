import CasesMapWorld from '../components/CasesMapWorld'
import WorldStats from '../components/WorldStats'
import CasesMapUsa from '../components/CasesMapUsa'
import Head from 'next/head'
import _getStaticProps from '../_getStaticProps'
import CasesMapEurope from '../components/CasesMapEurope'
import { useGlobalContext } from '../GlobalContext'
import SectionLabel from '../components/SectionLabel'

const title = 'Coronavirus Visualized | Updated Maps and Numbers'
const description = 'Latest Coronavirus stats visualized on interactive maps.'
const image = 'https://coronamap.app/images/og-image.png'

export default () => {
  const { worldCases, europeCases, usaCases } = useGlobalContext()

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="https://coronamap.app" />
        <meta property="og:image" content={image} />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="1200" />
        <meta property="og:image:alt" content="Coronavirus World Map" />
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
