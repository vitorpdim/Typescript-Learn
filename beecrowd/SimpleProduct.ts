import * as fs from 'fs'

const input = fs.readFileSync('/dev/stdin', 'utf-8')
const lines = input.split("\n");

function Prod(){
    const A = input(lines[0])
    const B = input(lines[1])

    const prod = A * B
    return `PROD = ${prod}`
}

console.log(Prod())

