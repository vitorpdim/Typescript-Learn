type propsCalculos = { 
    num1: number;
    num2: number;
    operacao: "soma" | "multiplicacao" | "divisão" | "subtração";
}

function Calculo({num1, num2, operacao}: propsCalculos){
    
    let somar = num1 + num2;
    let multiplicar = num1 * num2;
    let dividir = num1 / num2
    let subtrair = num1 - num2

    if(operacao == "soma"){
        return somar
    }

    if(operacao == "multiplicacao"){
        return multiplicar
    }

    if(operacao == "divisão"){
        if(num2 == 0){
            return "não é possivel dividir por zero"
        }else{
            return dividir
        }
    }

    if(operacao == "subtração"){
        return subtrair
    }
}

const printCalculo = Calculo({
    num1: 2, 
    num2: 0, 
    operacao: "divisão"
})

console.log(printCalculo);