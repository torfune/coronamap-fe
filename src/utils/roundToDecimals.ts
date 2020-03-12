const roundToDecimals = (number: number, decimalPlaces: number) => {
  const power = Math.pow(10, decimalPlaces)
  return Math.round(number * power) / power
}

export default roundToDecimals
