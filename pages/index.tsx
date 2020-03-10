import { useState, useEffect } from 'react'
import Axios from 'axios'
import Country from '../types/Country'
import MapChart from '../components/MapChart'
import Header from '../components/Header'
import styled from 'styled-components'
import { BP } from '../constants'

export default () => {
  const [countries, setCountries] = useState<Country[]>()

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const response = await Axios.get('data/08-03-20.json')
    setCountries(response.data)
  }

  return (
    <>
      <Header />
      <Content>
        <StyledLabel>Confirmed cases worldwide</StyledLabel>
        <MapChart countries={countries} />
      </Content>
    </>
  )
}

const StyledLabel = styled.h2`
  font-size: 18px;
  margin-bottom: 32px;

  @media (max-width: ${BP.MOBILE}) {
    font-size: 16px;
    margin-bottom: 16px;
  }
`
const Content = styled.div`
  padding: 128px 64px;
  min-height: 2000px;

  @media (max-width: ${BP.MOBILE}) {
    padding: 96px 24px;
  }
`
