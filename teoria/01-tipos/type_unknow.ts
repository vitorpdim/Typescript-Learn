// tipo desconhecido > quando vocce nao sabe o TIPO que vai receber

// bem parecido com any >> any é mais flexivel e voce pode passar qualquer valor

let idPedido: any = 123;
let totalPedido: unknown = 15;

let entregador: number = idPedido;
let totalEntrega: unknown = totalPedido; 
// ERRADO: let totalEntrega: number = totalPedido; 

// nao consigo colocar uma variavel do tipo desconhecido a um tipo diferente
// valor do tipo unknown so podem ser atribuidos ao tipo unknown ou ao any
console.log(entregador)