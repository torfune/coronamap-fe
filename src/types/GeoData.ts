interface GeoData {
  type: string
  properties: {
    [key: string]: string
  }
  geometry: {
    type: string
    coordinates: number[][][]
  }
  rsmKey: string
  svgPath: string
}

export default GeoData
