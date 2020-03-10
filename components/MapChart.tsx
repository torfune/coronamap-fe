import { FC, useEffect, useState } from 'react'
import GeoData from '../types/GeoData'
import Country from '../types/Country'
import {
  Geography,
  ComposableMap,
  Geographies,
  ZoomableGroup,
} from 'react-simple-maps'
import styled from 'styled-components'
import getFourChunks from '../utils/getFourChunks'
import { COLOR, GEO_URL, BP } from '../constants'
import MapLegend from './MapLegend'
import DataInfo from './DataInfo'
import ReactTooltip from 'react-tooltip'
import shade from '../utils/shade'

interface Props {
  countries?: Country[]
}
const MapChart: FC<Props> = ({ countries }) => {
  const [tooltip, setTooltip] = useState('')
  const [breakpoints, setBreakpoints] = useState<number[]>([])
  const [countryColor, setCountryColor] = useState<{
    [key: string]: string
  }>({ CN: COLOR.MAP_FILL[3] })

  useEffect(() => {
    if (!countries) return

    const newCountryColor = { ...countryColor }
    const { chunks, breakpoints } = getFourChunks(
      countries.filter(c => c.code !== 'CN').map(c => c.confirmedCases)
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
      <ComposableMap
        data-tip=""
        data-background-color="#333"
        viewBox="40 70 800 412"
      >
        <Geographies geography={GEO_URL.WORLD}>
          {({ geographies }: { geographies: GeoData[] }) =>
            geographies.map(geo => {
              const countryCode = geo.properties.ISO_A2
              const color = countryColor[countryCode] || '#ffffff'
              const country = countries?.find(c => c.code === countryCode)

              return (
                <StyledGeography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() => {
                    setTooltip(
                      `${geo.properties.NAME} - ${(
                        country?.confirmedCases || 0
                      ).toLocaleString()}`
                    )
                  }}
                  onMouseLeave={() => {
                    setTooltip('')
                  }}
                  style={{
                    default: {
                      fill: color,
                    },
                    hover: {
                      fill: shade(color, -15),
                    },
                    pressed: {
                      fill: shade(color, -15),
                    },
                  }}
                />
              )
            })
          }
        </Geographies>
      </ComposableMap>

      <BottomLine>
        <DataInfo updatedAt={new Date(2020, 2, 10)} />
        <MapLegend breakpoints={breakpoints} />
      </BottomLine>

      <ReactTooltip>{tooltip}</ReactTooltip>
    </>
  )
}

const StyledGeography = styled(Geography)`
  transition: 150ms;
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
