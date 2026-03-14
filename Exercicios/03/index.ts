function numTrue(num: number) {
  if (num >= 0) {
    return "true"
  }else{
    return 'eh menor que zero'
  }
}

let verificar = numTrue(-1)
console.log(verificar);
