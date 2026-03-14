type propsSquare = {
    lado: number
}

function AreaPerim({lado}: propsSquare){
    let perimetro = 4 * lado
    let area = lado * lado 

    return `Area do quadrado: ${area}\nPerimetro do quadrado: ${perimetro}`
}

const printAreaPerim = AreaPerim({lado: 5})
console.log(printAreaPerim);