type propsSquare = { 
    base: number
}

function calcularArea({base}: propsSquare){
    return base * base
}

const printCalcularArea = calcularArea({base: 2})
console.log(printCalcularArea)