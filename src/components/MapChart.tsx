import { FC, useEffect, useState } from 'react'
import GeoData from '../types/GeoData'
import { Geography, ComposableMap, Geographies } from 'react-simple-maps'
import styled from 'styled-components'
import getFourChunks from '../utils/getFourChunks'
import { COLOR, GEO_URL, BP, LOCALE } from '../constants'
import MapLegend from './MapLegend'
import DataInfo from './DataInfo'
import ReactTooltip from 'react-tooltip'
import shade from '../utils/shade'
import ColorMap from '../types/ColorMap'
import Data from '../types/Data'
import getStateCode from '../utils/getStateCode'
import getCountryCode from '../utils/getCountryCode'

type Type = 'WORLD' | 'USA' | 'EUROPE'
interface Props {
  type: Type
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

    // Remove China
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
    <div>
      <ComposableMap
        data-tip=""
        data-background-color="#333"
        viewBox={getViewBox(type)}
        projection={getProjection(type)}
        projectionConfig={
          type === 'EUROPE'
            ? {
                rotate: [-20.0, -52.0, 0],
                scale: 700,
              }
            : {}
        }
      >
        <Geographies geography={getMapUrl(type)}>
          {({ geographies }: { geographies: GeoData[] }) =>
            geographies.map(geo => {
              const { properties: gdata } = geo
              const name = type === 'USA' ? gdata.name : gdata.NAME
              const code = type === 'WORLD' ? gdata.ISO_A2 : getCode(type, name)
              const color = colorMap[code] || '#ffffff'
              const value = data[code]

              return (
                <StyledGeography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() => {
                    if (window.innerWidth > Number(BP.MOBILE.replace('px', '')))
                      setTooltip(
                        `${name} - ${(value || 0).toLocaleString(LOCALE)}`
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
        <DataInfo source={source} updatedAt={updatedAt} />
        <MapLegend breakpoints={breakpoints} />
      </BottomLine>

      <ReactTooltip>{tooltip}</ReactTooltip>
    </div>
  )
}

const getMapUrl = (type: Type) => {
  switch (type) {
    case 'WORLD':
      return GEO_URL.WORLD
    case 'USA':
      return GEO_URL.USA
    case 'EUROPE':
      return GEO_URL.EUROPE
  }
}

const getProjection = (type: Type) => {
  switch (type) {
    case 'WORLD':
      return 'geoEqualEarth'
    case 'USA':
      return 'geoAlbersUsa'
    case 'EUROPE':
      return 'geoAzimuthalEqualArea'
  }
}

const getViewBox = (type: Type) => {
  switch (type) {
    case 'WORLD':
      return '40 70 800 412'
    case 'USA':
      return '0 55 800 500'
    case 'EUROPE':
      return '120 60 440 450'
  }
}

const getCode = (type: 'USA' | 'EUROPE', name: string) => {
  switch (type) {
    case 'USA':
      return getStateCode(name)
    case 'EUROPE':
      return getCountryCode(name)
  }
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
