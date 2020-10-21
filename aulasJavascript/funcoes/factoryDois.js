// Função Factory (retorna um objeto, funções) #2

function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Celular', 1500.00))
console.log(criarProduto('iPad', 1200.00))