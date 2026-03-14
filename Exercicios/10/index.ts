type propsSquare = {
    lado: number
}

function perimetro({lado}: propsSquare){
    return lado * 4
}

const printPerimetro = perimetro({lado: 5});
console.log(printPerimetro)
