import Data from './types/Data'
import COUNTRY_CONTINENT from './constants/countryContinent'
import worldCasesData from '../public/data/world-cases.json'
import usaCasesData from '../public/data/usa-cases.json'
import summary from '../public/data/summary.json'

const _getStaticProps = async () => {
  const worldCases: Data = worldCasesData
  const usaCases: Data = usaCasesData
  const europeCases: Data = {}

  for (const country in worldCases) {
    const continent = COUNTRY_CONTINENT[country]
    if (continent === 'EU') {
      europeCases[country] = worldCases[country]
    }
  }

  return { props: { worldCases, europeCases, usaCases, summary } }
}

export default _getStaticProps
