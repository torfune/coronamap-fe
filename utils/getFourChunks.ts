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

function getFourChunks(numbers: number[]) {
  const breakpoints: number[] = []
  let chunks = [numbers]

  for (let i = 0; i < 2; i++) {
    let newChunks: number[][] = []
    for (const chunk of chunks) {
      const average = Math.round(Math.round(getAverage(chunk)) / 10) * 10
      if (!breakpoints[1]) {
        breakpoints[1] = average
      } else if (!breakpoints[0]) {
        breakpoints[0] = average
      } else {
        breakpoints[2] = average
      }
      newChunks = [...newChunks, ...splitByAverage(chunk, average)]
    }
    chunks = newChunks
  }

  return { chunks, breakpoints }
}

export default getFourChunks
