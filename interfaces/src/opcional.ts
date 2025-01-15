interface ICadastroProps{
    nome?: string; //supondo que o nome seja opcional
    email: string;
    status: boolean;
}

const novoUsuario: ICadastroProps = {
    nome: "Vitor",
    email: "vitor.cynh@gmail.com" ,
    status: true,
}

// console.log(novoUsuario)

function novoUser(usuario: ICadastroProps){
    console.log(usuario.email)
}

novoUser({email:"ana@ana.com", status: false});