interface SomaProps{
    (valor1: number, valor2: number): number;
}

let somaNumeros: SomaProps = (valor1: number, valor2: number): number =>{
    console.log('RESULTADO: ', valor1 + valor2);
    return valor1 + valor2;
}

const resultado = somaNumeros(15, 20)

console.log('Resulrado da variavel: ', resultado);