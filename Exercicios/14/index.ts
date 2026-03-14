type calculoProps ={
    comprimentoP: number
    comprimentoA:number

    alturaP: number
    alturaA: number
}

function calcularAzulejos({comprimentoP, alturaP, comprimentoA, alturaA}: calculoProps){
    const comprimentoParede = comprimentoP;
    const alturaParede = alturaP;
    const areaParede = comprimentoParede * alturaParede;

//  ----------------------------------------------------

    const comprimentoAzulejo = comprimentoA / 100;
    const alturaAzulejo = alturaA / 100
    const areaAzulejo = comprimentoAzulejo * alturaAzulejo

    const quantidadeAzulejo = Math.ceil(areaParede / areaAzulejo);

    return {areaParede, areaAzulejo,  quantidadeAzulejo}
}

const printQuantidade = calcularAzulejos({
    alturaA: 15,
    alturaP: 3,
    comprimentoA: 15,
    comprimentoP: 4.05
})
console.log(printQuantidade)
