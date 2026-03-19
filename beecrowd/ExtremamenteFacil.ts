import * as fs from 'fs';

const input = fs.readFileSync('/dev/stdin', 'utf-8');
const lines = input.split('\n');

const A = parseInt(lines[0]);
const B = parseInt(lines[1]);
const X = A + B;

console.log(`X = ${X}`);