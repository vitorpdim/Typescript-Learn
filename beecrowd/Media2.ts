import * as fs from "fs"

const input = fs.readFileSync("/dev/stdin", "utf-8")
const lines = input.trim().split(/\s+/)

const pesoA = 2.0
const pesoB = 3.0
const pesoC = 5.0

const A = parseFloat(lines[0])
const B = parseFloat(lines[1])
const C = parseFloat(lines[2])

const media = (A * pesoA + B * pesoB + C * pesoC) / 10

console.log(`MEDIA = ${media.toFixed(1)}`)