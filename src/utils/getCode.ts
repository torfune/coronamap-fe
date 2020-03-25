function getCode(
  name: string,
  collection: Array<{ code: string; names: string[] }>
) {
  const lcName = name.toLowerCase()

  for (let i = collection.length - 1; i >= 0; i--) {
    const { code, names } = collection[i]
    const lcNames = names.map(n => n.toLowerCase())

    if (lcNames.includes(lcName)) return code
  }

  console.warn(`Code for ${name} not found`)
  return ''
}

export default getCode
