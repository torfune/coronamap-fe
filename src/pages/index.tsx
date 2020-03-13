import CasesMapWorld from '../components/CasesMapWorld'
import WorldStats from '../components/WorldStats'
import CasesMapUsa from '../components/CasesMapUsa'
import _getStaticProps from '../_getStaticProps'
import CasesMapEurope from '../components/CasesMapEurope'
import { useGlobalContext } from '../GlobalContext'
import SectionLabel from '../components/SectionLabel'
import PageHead from '../components/PageHead'
import BarChart from '../components/BarChart'

export default () => {
  const { worldCases, europeCases, usaCases } = useGlobalContext()

  return (
    <>
      <PageHead
        title="Interactive Coronavirus Maps | Coronavirus Statistics | Updated"
        description="Latest Coronavirus numbers visualized using interactive maps and tables"
      />

      <WorldStats />

      <SectionLabel>Global map of confirmed cases</SectionLabel>
      <CasesMapWorld data={worldCases} />
      <BarChart data={worldCases} />

      <SectionLabel>Map of confirmed cases in the USA</SectionLabel>
      <CasesMapUsa data={usaCases} />

      <SectionLabel>Map of confirmed cases in Europe</SectionLabel>
      <CasesMapEurope data={europeCases} />
    </>
  )
}

export const getStaticProps = _getStaticProps
