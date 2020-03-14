import MapChart from './MapChart'
import { SOURCE, UPDATED_AT } from '../constants'
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
    updatedAt={createDate(UPDATED_AT.WORLD)}
  />
)

export default CasesMapWorld
