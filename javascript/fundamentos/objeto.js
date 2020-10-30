// Tipo Objeto

/* Coleção de chave e valores
 * Os atributos podem ser criados dinamicamente
 * JSON não é objeto, é um formato textual
 */
const produtoUm = {}
produtoUm.nome = 'Celular X'
produtoUm.preco = '1490,90'
produtoUm['Desconto Y'] = 0.40 // evitar atributos com espaço

console.log(produtoUm)

const produtoDois = {
    nome: 'Camisa X',
    preco: 79.90
}

console.log(produtoDois)
