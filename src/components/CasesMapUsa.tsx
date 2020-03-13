import MapChart from './MapChart'
import { SOURCE } from '../constants'
import createDate from '../utils/createDate'
import Data from '../types/Data'
import { FC } from 'react'

interface Props {
  data: Data
}
const CasesMapUsa: FC<Props> = ({ data }) => (
  <MapChart
    type="USA"
    data={data}
    source={`${SOURCE.CDC}, ${SOURCE.CNN}`}
    updatedAt={createDate('13-03-20')}
  />
)

export default CasesMapUsa
