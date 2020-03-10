function getAverage(numbers: number[]) {
  return numbers.reduce((acc, current) => acc + current, 0) / numbers.length
}

function splitByAverage(numbers: number[], average: number) {
  const result: number[][] = [[], []]

  for (const number of numbers) {
    if (number < average) {
      result[0].push(number)
    } else {
      result[1].push(number)
    }
  }

  return result
}

function getChunks(numbers: number[], count: number) {
  let chunks = [numbers]

  for (let i = 0; i < count; i++) {
    let newChunks: number[][] = []
    for (const chunk of chunks) {
      const average = getAverage(chunk)
      newChunks = [...newChunks, ...splitByAverage(chunk, average)]
    }
    chunks = newChunks
  }

  return chunks
}

export default getChunks
