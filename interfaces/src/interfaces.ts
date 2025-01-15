// let loja: object;

// loja = {
//     nome: "BK",
//     endereco: "Rua x",
//     status: true,
// }

// Interface:  Descrever a estrutura de um objeto o padrao que ele vai conter

interface ILojaProps{
    nome: string;
    endereco: string;
    status: boolean;
}
            // tipo que segue o padrao
const BurgerK: ILojaProps = { // ele precisa seguir os parametros que passamos na interface
    nome: "Burger King",
    endereco: "rua logo ali",
    status: true,
}

// console.log(BurgerK);

function novaLoja({nome, endereco, status}: ILojaProps){
    console.log(`Loja ${nome} criada com sucesso!`)
    console.log(`Endereco da loja: ${endereco}`)
    console.log(`Status da loja ${status}`)

    console.log("==========================")
}

novaLoja({nome: "Para lanches", endereco: "Rua ali na esquina", status: false});
novaLoja({nome: "Cheeses", endereco: "Rua epstein", status: false});
novaLoja({nome: "Para lanches 2", endereco: "Rua AV asiufh", status: true});