type resultadoAnalise = {
    numerosLista: number;
    primeiroNumero: number;
} | string


function analisarLista(lista: number[]): resultadoAnalise {
  const numerosLista = lista.length;
  const primeiroNumero = lista[0];

  if (lista.length === 0) {
    return "lista vazia"
  }else{ 
    return {numerosLista, primeiroNumero};
  }
}

const resultado = analisarLista([1, 4, 6, 7, 9, 100]);
console.log(resultado);
