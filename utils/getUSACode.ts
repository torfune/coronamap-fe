import USA_STATE_CODES from '../constants/usaStateCodes'

const entries = Object.entries(USA_STATE_CODES)

const getUSACode = (name: string) => {
  const state = entries.find(e => e[1].includes(name))
  return state ? state[0] : ''
}

export default getUSACode
