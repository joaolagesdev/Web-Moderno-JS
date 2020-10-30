// Processar template string a partir de uma função
// Pouco útil

function tag(partes, ...valores) {
    console.log(partes)
    console.log(valores)
    return 'Outra string'
}

const aluno = 'João'
const situacao = 'Aprovado'
console.log(tag `${aluno} está ${situacao}.`)