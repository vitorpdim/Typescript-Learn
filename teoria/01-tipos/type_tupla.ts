// tupla nao possui no JS e sim apenas com TS

let aluno: [string, number]; // ele precisa seguir a msm ordem de tipos

aluno = ["sujeito programador", 134]
aluno.push("Matheus", 13423)

// console.log(aluno)

let statusPedido: [string, string, string];
statusPedido = ["em producao", "saiu para entrega", "pedido entregue"]

console.log(statusPedido);