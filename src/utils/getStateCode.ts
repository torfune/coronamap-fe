import USA_STATE_CODES from '../constants/usaStateCodes'

const entries = Object.entries(USA_STATE_CODES)

const getStateCode = (name: string) => {
  const state = entries.find(([_, names]) =>
    names.map(n => n.toLowerCase()).includes(name.toLowerCase())
  )
  return state ? state[0] : ''
}

export default getStateCode
