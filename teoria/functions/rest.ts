// function totalVendas(venda1 : number, venda2 : number, venda3 : number, venda4 : number){

//     const total = venda1 + venda2 + venda3 + venda4;
//     console.log(total)
//     return total;
// }

// totalVendas(10, 30, 40, 50)

function totalVendas(...vendas: number[]){ // tipar os valores cujo nao sei a quantidade que virao
    const quantidadeVendas = vendas.length;

    console.log(`voce fez ${quantidadeVendas} vendas hoje!`)

}

totalVendas(10, 20, 30, 40, 90,23)

// vendas.map ----- percorrer toda lista
// vendas.push ---- adicionar algo a mais
// vendas.reduce ----- para calcular ou fazer alguma funcao ali dentro

// o mesmo funciona para arrays de string:

function mostrarNomes(...nomes: string[]){ // nao sei quantos nomes vao passar e é um array de string
    console.log(`quantidade de pesoas: ${nomes.length}`)

    nomes.map(nome =>{
        console.log(nome) // aqui percorro todos os nomes com o .map e mostro o nome da vez com o console
    })
}

mostrarNomes("Laisa", "Ana", "Hnerique")