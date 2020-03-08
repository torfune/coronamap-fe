import { ComposableMap, Geographies, Geography } from 'react-simple-maps'
import styled from 'styled-components'

const geoUrl =
  'https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json'

export default () => (
  <div>
    <ComposableMap>
      <Geographies geography={geoUrl}>
        {({ geographies }) => geographies.map(renderGeography)}
      </Geographies>
    </ComposableMap>
  </div>
)

const renderGeography = geo => {
  console.log(geo.properties)
  return (
    <StyledGeography key={geo.rsmKey} geography={geo} opacity={Math.random()} />
  )
}

const StyledGeography = styled(Geography)<{ opacity: number }>`
  fill: red;
  opacity: ${props => props.opacity};
`
