import { FC, useEffect, useState } from 'react'
import GeoData from '../types/GeoData'
import Country from '../types/Country'
import { Geography, ComposableMap, Geographies } from 'react-simple-maps'
import styled from 'styled-components'
import getChunks from '../utils/getChunks'
import { COLOR, GEO_URL } from '../constants'

interface Props {
  countries?: Country[]
}
const MapChart: FC<Props> = ({ countries }) => {
  const [countryColor, setCountryColor] = useState<{
    [key: string]: string
  }>({ CN: COLOR.MAP_CHINA })

  useEffect(() => {
    if (!countries) return

    const chunks = getChunks(
      countries.map(c => c.confirmedCases),
      2
    )

    const newCountryColor = { ...countryColor }

    for (const country of countries) {
      for (let i = 0; i < chunks.length; i++) {
        if (chunks[i].includes(country.confirmedCases)) {
          newCountryColor[country.code] = COLOR.MAP_FILL[i]
          break
        }
      }
    }

    setCountryColor(newCountryColor)
  }, [countries])

  return (
    <ComposableMap viewBox="40 70 800 600">
      <Geographies geography={GEO_URL.WORLD}>
        {({ geographies }: { geographies: GeoData[] }) =>
          geographies.map(geo => (
            <StyledGeography
              key={geo.rsmKey}
              geography={geo}
              fill={countryColor[geo.properties.ISO_A2] || COLOR.MAP_BACKGROUND}
            />
          ))
        }
      </Geographies>
    </ComposableMap>
  )
}

interface StyledGeographyProps {
  fill: string
}
const StyledGeography = styled(Geography)<StyledGeographyProps>`
  fill: ${props => props.fill};
  transition: 400ms ease-out;
  stroke: #000;
  stroke-width: 0.1px;
  outline: 0;
`

export default MapChart
