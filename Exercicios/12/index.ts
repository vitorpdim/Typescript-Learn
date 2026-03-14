type propsRetang = {
    base: number
    altura: number
}

function areaPerim({base, altura}: propsRetang){
    const area = base * altura
    const perimetro = 2 * (altura + base)

    return{
        areaCalc: area,
        perimetroCalc: perimetro
    }
}

const printAreaPerim = areaPerim({base: 10, altura: 5})
console.log(printAreaPerim)