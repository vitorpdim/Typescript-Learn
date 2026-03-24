import * as fs from "fs"

const input = fs.readFileSync("/dev/stdin", "utf-8")
const lines = input.trim().split("\n")

const A = parseFloat(lines?.trim() || "0")
const B = parseFloat(lines?.trim() || "0")

const MEDIA = (A * 3.5 + B * 7.5) / 11.0

console.log(`MEDIA = ${MEDIA.toFixed(5)}`)