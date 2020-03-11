const createDate = (str: string) => {
  const parts = str.split('-')

  const day = Number(parts[0])
  const month = Number(parts[1]) - 1
  const year = Number(`20${parts[2]}`)

  return new Date(year, month, day)
}

export default createDate
