// type array.

// ------ 2 formatos de criaçao de array:

// let filmes: Array<string>;
// let filmes: string[]

// ------

let filmes: (string | number)[];

filmes = ["Filme 1", "Filme 2"]
filmes.push(15) // aceita o number pois utilizamos o union type

console.log("Meus Filmes", filmes)