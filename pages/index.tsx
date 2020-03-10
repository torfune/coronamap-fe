import { useState, useEffect } from 'react'
import Axios from 'axios'
import Country from '../types/Country'
import MapChart from '../components/MapChart'
import styled from 'styled-components'
import { BP } from '../constants'
import Stats from '../components/Stats'

export default () => {
  const [countries, setCountries] = useState<Country[]>()

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const response = await Axios.get('data/10-03-20.json')
    setCountries(response.data)
  }

  return (
    <>
      <StyledLabel>Confirmed cases worldwide</StyledLabel>
      <MapChart countries={countries} />

      <StyledLabel>Situation in numbers</StyledLabel>
      <Stats />
    </>
  )
}

const StyledLabel = styled.h3`
  font-size: 18px;
  margin-bottom: 24px;
  margin-top: 80px;

  @media (max-width: ${BP.MOBILE}) {
    font-size: 16px;
    margin-bottom: 16px;
  }
`
