import { useContext, createContext } from 'react'
import Data from './types/Data'
import Summary from './types/Summary'

const initialValue: {
  worldCases: Data
  europeCases: Data
  usaCases: Data
  summary: Summary
} = {
  worldCases: {},
  europeCases: {},
  usaCases: {},
  summary: { totalCases: 0, totalDeaths: 0, totalRecovered: 0, updatedAt: '' },
}

const GlobalContext = createContext(initialValue)

export const useGlobalContext = () => useContext(GlobalContext)
export default GlobalContext
