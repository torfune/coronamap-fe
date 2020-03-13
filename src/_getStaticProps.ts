import whoCases from './data/who/world-cases-12-03-20.json'
import ecdcCases from './data/ecdc/world-cases-12-03-20_08-00.json'
import Data from './types/Data'
import COUNTRY_CONTINENT from './constants/countryContinent'

const _getStaticProps = async () => {
  const worldCases: Data = { ...whoCases }
  for (const [code, value] of Object.entries(ecdcCases)) {
    if (!worldCases[code] || value > worldCases[code]) {
      worldCases[code] = value
    }
  }

  const europeCases: Data = {}
  for (const country in worldCases) {
    const continent = COUNTRY_CONTINENT[country]
    if (continent === 'EU') {
      europeCases[country] = worldCases[country]
    }
  }

  return { props: { worldCases, europeCases } }
}

export default _getStaticProps
