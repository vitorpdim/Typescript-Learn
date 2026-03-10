// interface TecnologiaProps{
//     id: string;
//     nome: string;
//     slug: string[];
// }

// let tecnologia1: TecnologiaProps = {
//     id: "1",
//     nome: "PHP",
//     slug: ["php", "php-do-zero"],
// }

interface TecnologiaProps{
    id: string;
    nome: string;
    descricao?: string;
}
interface Nomes{
    tecnologia: TecnologiaProps[]
}

let frontend: Nomes = {
    tecnologia: [
        {id: "12", nome:"React.js", descricao: "biblioteca para criar interfaces"}
    ]
}

console.log(frontend.tecnologia)