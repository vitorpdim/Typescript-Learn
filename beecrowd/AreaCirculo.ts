import * as fs from 'fs'

const input = fs.readFileSync('/dev/stdin', 'utf-8')
const lines = input.split('\n')

const n = 3.14159
const raio: number = parseFloat(lines[0])

const area = n * raio**2

console.log(`A=${area.toFixed(4)}`)