import { FC, useEffect, useState } from 'react'
import GeoData from '../types/GeoData'
import { Geography, ComposableMap, Geographies } from 'react-simple-maps'
import styled from 'styled-components'
import getFourChunks from '../utils/getFourChunks'
import { COLOR, GEO_URL, BP } from '../constants'
import MapLegend from './MapLegend'
import DataInfo from './DataInfo'
import ReactTooltip from 'react-tooltip'
import shade from '../utils/shade'
import ColorMap from '../types/ColorMap'
import Data from '../types/Data'
import getUSACode from '../utils/getUSACode'

interface Props {
  type: 'WORLD' | 'USA'
  data: Data
  source: string
  updatedAt: Date
}
const MapChart: FC<Props> = ({ type, data, source, updatedAt }) => {
  const [tooltip, setTooltip] = useState('')
  const [breakpoints, setBreakpoints] = useState<number[]>([])
  const [colorMap, setColorMap] = useState<ColorMap>({})

  useEffect(() => {
    const values = Object.values(data)
    if (type === 'WORLD') {
      values.shift()
    }

    const { chunks, breakpoints } = getFourChunks(values)

    const newColorMap: ColorMap =
      type === 'WORLD' ? { CN: COLOR.MAP_FILL[3] } : {}
    for (const [code, value] of Object.entries(data)) {
      for (let i = 0; i < chunks.length; i++) {
        if (chunks[i].includes(value)) {
          newColorMap[code] = COLOR.MAP_FILL[i]
          break
        }
      }
    }

    setBreakpoints(breakpoints)
    setColorMap(newColorMap)
  }, [data])

  return (
    <>
      <ComposableMap
        data-tip=""
        data-background-color="#333"
        viewBox={type === 'WORLD' ? '40 70 800 412' : '0 55 800 500'}
        projection={type === 'USA' ? 'geoAlbersUsa' : 'geoEqualEarth'}
      >
        <Geographies geography={type === 'WORLD' ? GEO_URL.WORLD : GEO_URL.USA}>
          {({ geographies }: { geographies: GeoData[] }) =>
            geographies.map(geo => {
              const { properties: gdata } = geo
              const name = type === 'WORLD' ? gdata.NAME : gdata.name
              const code = type === 'WORLD' ? gdata.ISO_A2 : getUSACode(name)
              const color = colorMap[code] || '#ffffff'
              const value = data[code]

              return (
                <StyledGeography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() => {
                    setTooltip(`${name} - ${(value || 0).toLocaleString()}`)
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
        <DataInfo source={source} updatedAt={updatedAt} />
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
