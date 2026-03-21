import * as fs from "fs";

const input = fs.readFileSync("/dev/stdin", "utf-8");
const lines = input.split("\n");

function soma() {
  const A = parseInt(lines[0]);
  const B = parseInt(lines[1]);

  const soma = A + B;
  return `SOMA = ${soma}`
}

console.log(soma());
