// afirmando algum tipo

// vamo supor que veio um dado de uma api e eu naosei, mas eu sei que ela me devolve um numero
let statusAtual: unknown = 1 
let mudaStatus: number = 0 

// estou afirmando que o statusAtual eh de fato um numero
mudaStatus = statusAtual as number;

// outra maneira de afirmar o tipo
mudaStatus = <number>statusAtual;
console.log(mudaStatus);