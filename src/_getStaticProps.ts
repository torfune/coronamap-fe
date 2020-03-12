import worldCases from './data/world/world-cases-11-03-20.json'
import euCases from './data/eu/eu-cases-12-03-20_08-00.json'
import Data from './types/Data.js'

const _getStaticProps = async () => {
  const mergedWorldCases: Data = { ...worldCases }
  for (const [code, value] of Object.entries(euCases)) {
    if (!mergedWorldCases[code] || value > mergedWorldCases[code]) {
      mergedWorldCases[code] = value
    }
  }

  return {
    props: {
      worldCases: mergedWorldCases,
    },
  }
}

export default _getStaticProps
