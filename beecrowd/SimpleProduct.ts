import * as fs from 'fs'

const input = fs.readFileSync('/dev/stdin', 'utf-8')
const lines = input.split("\n");

function Prod(){
    const A = parseInt(lines[0])
    const B = parseInt(lines[1])

    const prod = A * B
    return `PROD = ${prod}`
}

console.log(Prod())

