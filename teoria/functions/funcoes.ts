function login(username: string | number): boolean{ // a tipagem dinamica retorna void
    let message: string = 'bem vindo' + username
    
    console.log(message)
    return true

}

const retornoFuncao = login("sujeito programador") // posso passar number tambem