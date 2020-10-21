// Declaratiivo VS Imperativo

const alunos = [
    {nome: 'João', nota: 7.9},
    {nome: 'Maria', nota: 9.2},
    {nome: 'Ana', nota: 7.6},
    {nome: 'Rafael', nota: 6.5},
    {nome: 'Isabela', nota: 7.1},
    {nome: 'Pedro', nota: 9.8},
    {nome: 'Carol', nota: 6.2}
]

// Imperativo
let totalUm = 0
for (let i = 0; i < alunos.length; i++) {
    totalUm += alunos[i].nota
}
console.log("Abordagem Imperativa")
console.log(totalUm / alunos.length)

// Declarativo - Abordagem interessantes
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual
const totalDois = alunos.map(getNota).reduce(soma)
console.log("Abordagem Declarativa")
console.log(totalDois / alunos.length)

// select codigo, nome, email from clientes where ativo = 1