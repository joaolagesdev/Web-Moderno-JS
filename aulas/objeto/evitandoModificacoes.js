// Evitando modificações

// Object.preventExtensions - não pode extender a quantidade de atributos do objeto
const produto = Object.preventExtensions({
    nome: 'Produto Qualquer', preco: 1.99, tag: 'promocao'
})

console.log('Extensível:', Object.isExtensible(produto)) // 

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)

// Object.seal - selar o objeto, não consegue adicionar/excluir atributos, mas consegue modificar os valores dos atributos
const pessoa = {nome: 'Juliana', idade: 35}
Object.seal(pessoa)
console.log('Selado', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

// Object.freeze = selado + valores constantes
 