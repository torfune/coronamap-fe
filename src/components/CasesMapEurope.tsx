import MapChart from './MapChart'
import { SOURCE, UPDATED_AT } from '../constants'
import createDate from '../utils/createDate'
import Data from '../types/Data'
import { FC } from 'react'

interface Props {
  data: Data
}
const CasesMapEurope: FC<Props> = ({ data }) => (
  <MapChart
    type="EUROPE"
    data={data}
    source={`${SOURCE.WHO}, ${SOURCE.ECDC}`}
    updatedAt={createDate(UPDATED_AT.EUROPE)}
  />
)

export default CasesMapEurope
