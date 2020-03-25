function getName(
  code: string,
  collection: Array<{ code: string; names: string[] }>
) {
  for (let i = collection.length - 1; i >= 0; i--) {
    if (collection[i].code === code) {
      return collection[i].names[0]
    }
  }

  console.warn(`Name for ${code} not found`)
  return ''
}

export default getName
