import MapChart from './MapChart'
import Data from '../types/Data'
import { FC } from 'react'

interface Props {
  data: Data
}
const CasesMapUsa: FC<Props> = ({ data }) => (
  <MapChart type="USA" data={data} source="Worldometer" />
)

export default CasesMapUsa
