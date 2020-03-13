import COUNTRY_CODES from '../constants/countryCodes'

const getCountryName = (code: string) => {
  const countryNames = COUNTRY_CODES[code]
  return countryNames[0]
}

export default getCountryName
