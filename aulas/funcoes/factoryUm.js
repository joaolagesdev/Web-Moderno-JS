// Função Factory (retorna um objeto, funções) #1

// Factory simples
function criarPessoa() {
    return {
        nome: 'Ana',
        sobrenome: 'Silvia'
    }
}

console.log(criarPessoa())