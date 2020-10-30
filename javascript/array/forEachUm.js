// Foreach #1
// Percorrer o array  

const aprovados = [
    'Agatha',
    'Aldo',
    'Daniel',
    'Eduardo',
    'João',
    'Raquel',
    'Tales'
]

aprovados.forEach(function (nome, indice, array) { 
// callback - parâmetros que podem ser passados(elemento, index do elemento, array) 
    console.log(`${indice + 1} ${nome}`)
    console.log(array)
})

aprovados.forEach((nome) => console.log(nome))

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)

