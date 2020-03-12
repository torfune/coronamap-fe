import whoCases from './data/who/world-cases-12-03-20.json'
import ecdcCases from './data/ecdc/world-cases-12-03-20_08-00.json'
import Data from './types/Data.js'

const _getStaticProps = async () => {
  const worldCases: Data = { ...whoCases }
  for (const [code, value] of Object.entries(ecdcCases)) {
    if (!worldCases[code] || value > worldCases[code]) {
      worldCases[code] = value
    }
  }

  return { props: { worldCases } }
}

export default _getStaticProps
