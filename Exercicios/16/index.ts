type resultado = {soma: number, maior: number, menor: number} | string | undefined

function processarArray(lista: number[]): resultado {
    
  if (lista.length === 0) {
    return "Lista vazia";
  }

  let soma = 0;
  let maior = lista[0]!;
  let menor = lista[0]!;

  

  for (let i: number = 0; i < lista.length; i++) {

    soma += lista[i]!;

    if (lista[i]! > maior) {
      maior = lista[i]!
    } 
    
    if(lista[i]! < menor) {
      menor = lista[i]!;
    }
  }

  return {soma, maior, menor}
}

const printArray = processarArray([1, 3, 4, 5, 2345])
console.log(printArray)