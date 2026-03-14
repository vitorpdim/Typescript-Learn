function divisao(num: number, num2: number){
    let resultado = num / num2;
    if(num2 == 0){
        return "Erro, não foi possivel realizar a divisao (impossivel dividir por zero)"
    }
    return resultado
}

const printResultado = divisao(10, 0)
console.log(printResultado)