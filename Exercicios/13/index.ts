type entradaProps = {
    valor: number;
    unidade: "centimetro" | "metro"
}

function converterMedida({valor, unidade}: entradaProps): number{
    if(unidade === "centimetro"){
        return valor / 100
    }else{
        return valor * 100
    }
}

const printConversao = converterMedida({valor: 100, unidade: "centimetro"})
console.log(printConversao)