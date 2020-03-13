import COUNTRY_CODES from '../constants/countryCodes'

const entries = Object.entries(COUNTRY_CODES)

const getCountryCode = (name: string) => {
  const country = entries.find(([_, names]) =>
    names.map(n => n.toLowerCase()).includes(name.toLowerCase())
  )
  return country ? country[0] : ''
}

export default getCountryCode
