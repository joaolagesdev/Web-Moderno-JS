// Objetos Constantes

// pessoa -> 123 (endereço de memória)-> {...}
// A constante aponta para o endereço, e o endereço para o objeto, por isso ele foi alterado
const pessoa = {nome: 'João'}
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> 456 ->{...}
// pessoa = {nome: 'Ana'}

Object.freeze(pessoa) // congela o objeto pessoa, você não consegue manipular, deletar, adicionar atributos, etc...
pessoa.nome = 'Maria'
pessoa.endereco = 'Rua ABC'
delete pessoa.nome
console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({nome: 'João'})
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)