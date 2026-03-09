// type boolean

let estaAutenticado: boolean; // nao usar as instancias de metodos: new Boolean
estaAutenticado = false;
console.log(typeof estaAutenticado)

// parametrizar:

let codeStatus: number = 2;
estaAutenticado = Boolean(codeStatus); // o metodo Boolean converte a variavel
//tudo que for diferente de zero, undefined, string vazia etc ele retorna true
console.log(estaAutenticado)