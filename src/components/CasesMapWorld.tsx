import MapChart from './MapChart'
import { SOURCE } from '../constants'
import createDate from '../utils/createDate'
import Data from '../types/Data'
import { FC } from 'react'

interface Props {
  data: Data
}
const CasesMapWorld: FC<Props> = ({ data }) => (
  <MapChart
    type="WORLD"
    data={data}
    source={SOURCE.WHO}
    updatedAt={createDate('13-03-20')}
  />
)

export default CasesMapWorld
