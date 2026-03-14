function soma(num1: number, num2: number) {
  let resultado = num1 + num2;
  if (resultado >= 0) {
    console.log("O resultado é positivo")
} else {
    console.log("O resultado é negativo")
  }
  return resultado;
}


let printSoma = soma(20, 40)
console.log("resultado da soma: " + printSoma)

