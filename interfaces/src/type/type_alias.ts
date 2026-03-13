type Uuid =  string | number | null

function acessar(uuid: Uuid, nome: string){
        console.log(`id: ${uuid} - Bem vindo ${nome}`)
}

function logUsuario(uuid: Uuid){
        console.log(`Conta referente ao UUID ${uuid}`)
}

// acessar(123,"Pedro")
// acessar("55", "henrique")
// logUsuario("123")

type Moedas = "BRL" | "USD" | "BTC"

function comprarItem(moeda: Moedas){
    console.log(`Comprando com a moeda: ${moeda}`)
}

comprarItem("BTC")