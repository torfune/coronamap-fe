import MapChart from './MapChart'
import { SOURCE } from '../constants'
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
    updatedAt={createDate('13-03-20')}
  />
)

export default CasesMapEurope
