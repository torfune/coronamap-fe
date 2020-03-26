import MapChart from './MapChart'
import Data from '../types/Data'
import { FC } from 'react'

interface Props {
  data: Data
}
const CasesMapEurope: FC<Props> = ({ data }) => (
  <MapChart type="EUROPE" data={data} source="WHO, ECDC, Worldometer" />
)

export default CasesMapEurope
