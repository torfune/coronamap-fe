import { useState, useEffect } from 'react'
import Axios from 'axios'
import MapChart from '../components/MapChart'
import Stats from '../components/GlobalStats'
import SectionLabel from '../components/SectionLabel'
import Data from '../types/Data'
import { SOURCE } from '../constants'
import createDate from '../utils/createDate'

export default () => {
  const [worldData, setWorldData] = useState<Data>({})
  const [usaData, setUsaData] = useState<Data>({})

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const [worldResponse, usaResponse] = await Promise.all([
      Axios.get('data/world/world-cases-10-03-20.json'),
      Axios.get('data/usa/usa-cases-11-03-20.json'),
    ])
    setWorldData(worldResponse.data)
    setUsaData(usaResponse.data)
  }

  return (
    <>
      <SectionLabel>Confirmed cases globally</SectionLabel>
      <MapChart
        type="WORLD"
        data={worldData}
        source={SOURCE.WHO}
        updatedAt={createDate('10-03-20')}
      />

      <SectionLabel>Confirmed cases in the USA</SectionLabel>
      <MapChart
        type="USA"
        data={usaData}
        source={`${SOURCE.CDC}, ${SOURCE.CNN}`}
        updatedAt={createDate('11-03-20')}
      />

      <SectionLabel>Global situation in numbers</SectionLabel>
      <Stats />
    </>
  )
}
