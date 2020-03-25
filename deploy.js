const fs = require('fs')
const { spawn } = require('child_process')

const dataFolder = 'public/data'
const worldCasesFile = 'public/data/world-cases.json'
const usaCasesFile = 'public/data/usa-cases.json'

if (!fs.existsSync(dataFolder)) {
  console.log(`Folder ${dataFolder} does not exist`)
  process.exit()
}

if (!fs.existsSync(worldCasesFile)) {
  console.log(`File ${worldCasesFile} does not exist`)
  process.exit()
}

if (!fs.existsSync(usaCasesFile)) {
  console.log(`File ${usaCasesFile} does not exist`)
  process.exit()
}

const child = spawn('now', ['--prod', '--confirm'])
child.stdout.setEncoding('utf8')
child.stdout.on('data', chunk => {
  console.log(chunk)
})
