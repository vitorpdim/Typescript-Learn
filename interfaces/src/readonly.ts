interface ProdutoProps{
    readonly id: string; // ele nao permite alterar
    nome: string;
    descricao: string;
}

let produto1: ProdutoProps = {
    id: "1";
    nome: "tenis nike",
    descricao: "super tenis maneiro"
}

produto1.nome = "tenis nike maneirissimo"
console.log(produto1)