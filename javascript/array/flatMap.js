// FlatMap

const escola = [{
    nome: 'Turma M1',
    alunos: [{
        nome: 'João',
        nota: 8.1
    }, {
        nome: 'Ana',
        nota: 9.0
    }, {
        nome: 'Pedro',
        nota: 10
    }]
}, {
    nome: 'Turma m2',
    alunos: [{
        nome: 'Rafael',
        nota: 8.3
    }, {
        nome: 'Mariana',
        nota: 7.0
    }, {
        nome: 'Clara',
        nota: 6.5
    }]
}]

const getNotaDoAluno = a => a.nota
const getNotasDaTurma = t => t.alunos.map(getNotaDoAluno) 

const notasUm = escola.map(getNotasDaTurma)

console.log(notasUm)

Array.prototype.flatMap = function(callback) {
    // não existe esse método na API padrão
    // transformar matriz em um único array
    return Array.prototype.concat.apply([], this.map(callback))
}

const notasDois = escola.flatMap(getNotasDaTurma)
console.log(notasDois)
