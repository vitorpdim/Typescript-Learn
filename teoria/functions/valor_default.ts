// como deixar um valor por default ou deixar ele opcional
// o nome no parametro desta funcao é default, portanto caso nao seja inserido nenhum valor na funcao cadastro ele retornara 'aluno' sempre
function cadastro(email : string, senha : string, nome = "aluno", idade ? : number) : void{
    let data = {email, senha, nome, idade}
    
    console.log(data)
}

cadastro('jksdngbisndg@gmail.com', '1234', 'julien', 19);