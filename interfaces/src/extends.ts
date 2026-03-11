// vamo supor que temos um jogo e esse jogo pode ter uma dlc

interface JogoProps{
    readonly id: string;
    nome: string;
    descricao: string;
    plataforma: string[];
}

const persona: JogoProps ={
    id: "123",
    nome: "Persona 4",
    descricao: "JRPG",
    plataforma: ["Console", "Computador"]
}

interface DLC extends JogoProps{
    JogoOriginal: JogoProps
    novoConteudo: string[],
}

const personaDLC: DLC ={
    id: "90",
    nome: "Persona - AIGIS prologue",
    descricao: "JRPG adicionando modo historia da personagem aigis",
    plataforma: ["Console", "Computador"],
    novoConteudo: ["Mais um modo historia", "Novas skins", "Novos mapas", "Novos personas"],
    JogoOriginal: persona
}

console.log(personaDLC)