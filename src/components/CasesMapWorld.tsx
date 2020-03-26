import MapChart from './MapChart'
import Data from '../types/Data'
import { FC } from 'react'

interface Props {
  data: Data
}
const CasesMapWorld: FC<Props> = ({ data }) => (
  <MapChart type="WORLD" data={data} source="WHO, ECDC, Worldometer" />
)

export default CasesMapWorld
