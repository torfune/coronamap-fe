interface GeoData {
  type: string
  properties: {
    NAME: string
    NAME_LONG: string
    ABBREV: string
    FORMAL_EN: string
    POP_EST: number
    POP_RANK: number
    GDP_MD_EST: number
    POP_YEAR: number
    GDP_YEAR: number
    ISO_A2: string
    ISO_A3: string
    CONTINENT: string
    REGION_UN: string
    SUBREGION: string
  }
  geometry: {
    type: string
    coordinates: number[][][]
  }
  rsmKey: string
  svgPath: string
}

export default GeoData
