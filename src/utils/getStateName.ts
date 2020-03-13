import USA_STATE_CODES from '../constants/usaStateCodes'

const getStateName = (code: string) => {
  const countryNames = USA_STATE_CODES[code]
  return countryNames[0]
}

export default getStateName
