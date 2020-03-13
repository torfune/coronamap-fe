import { useContext, createContext } from 'react'
import Data from './types/Data'

const initialValue: {
  worldCases: Data
  europeCases: Data
  usaCases: Data
} = {
  worldCases: {},
  europeCases: {},
  usaCases: {},
}

const GlobalContext = createContext(initialValue)

export const useGlobalContext = () => useContext(GlobalContext)
export default GlobalContext
