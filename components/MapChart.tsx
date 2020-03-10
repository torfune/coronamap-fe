import { FC, useEffect, useState } from 'react'
import GeoData from '../types/GeoData'
import Country from '../types/Country'
import { Geography, ComposableMap, Geographies } from 'react-simple-maps'
import styled from 'styled-components'
import getFourChunks from '../utils/getFourChunks'
import { COLOR, GEO_URL, BP } from '../constants'
import MapLegend from './MapLegend'
import MapInfo from './MapInfo'

interface Props {
  countries?: Country[]
}
const MapChart: FC<Props> = ({ countries }) => {
  const [breakpoints, setBreakpoints] = useState<number[]>([])
  const [countryColor, setCountryColor] = useState<{
    [key: string]: string
  }>({ CN: COLOR.MAP_FILL[3] })

  useEffect(() => {
    if (!countries) return

    const newCountryColor = { ...countryColor }
    const { chunks, breakpoints } = getFourChunks(
      countries.map(c => c.confirmedCases)
    )

    for (const country of countries) {
      for (let i = 0; i < chunks.length; i++) {
        if (chunks[i].includes(country.confirmedCases)) {
          newCountryColor[country.code] = COLOR.MAP_FILL[i]
          break
        }
      }
    }

    setBreakpoints(breakpoints)
    setCountryColor(newCountryColor)
  }, [countries])

  return (
    <>
      <ComposableMap viewBox="40 70 800 412">
        <Geographies geography={GEO_URL.WORLD}>
          {({ geographies }: { geographies: GeoData[] }) =>
            geographies.map(geo => (
              <StyledGeography
                key={geo.rsmKey}
                geography={geo}
                fill={
                  countryColor[geo.properties.ISO_A2] || COLOR.MAP_BACKGROUND
                }
              />
            ))
          }
        </Geographies>
      </ComposableMap>

      <BottomLine>
        <MapInfo updatedAt={new Date(2020, 2, 8)} />
        <MapLegend breakpoints={breakpoints} />
      </BottomLine>
    </>
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
const BottomLine = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;

  @media (max-width: ${BP.MOBILE}) {
    flex-direction: column-reverse;
  }
`

export default MapChart
